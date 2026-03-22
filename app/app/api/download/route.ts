import { NextRequest, NextResponse } from 'next/server';
import { existsSync } from 'fs';
import { join } from 'path';
import archiver from 'archiver';

const ALLOWED_FILES: Record<string, string> = {
  'ZENDADDY_GODFLICK_v3.0_PRO.gpc': 'ZENDADDY_GODFLICK_v3.0_PRO.gpc',
  'INSTRUCTIONS_ZENDADDY_GODFLICK.txt': 'INSTRUCTIONS.txt',
};

export async function GET(req: NextRequest) {
  try {
    const sessionId = req.nextUrl.searchParams.get('session_id');

    if (!sessionId) {
      return new NextResponse('No session ID provided', { status: 400 });
    }

    const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

    if (!STRIPE_SECRET_KEY) {
      return new NextResponse('Server configuration error', { status: 500 });
    }

    const response = await fetch(`https://api.stripe.com/v1/checkout/sessions/${sessionId}`, {
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
      },
    });

    if (!response.ok) {
      return new NextResponse('Invalid session', { status: 403 });
    }

    const session = await response.json();

    if (session.payment_status !== 'paid') {
      return new NextResponse('Payment not completed', { status: 403 });
    }

    const downloadDir = join(process.cwd(), 'private', 'downloads');

    const chunks: Buffer[] = [];
    const archive = archiver('zip', { zlib: { level: 9 } });

    archive.on('data', (chunk: Buffer) => chunks.push(chunk));

    const archivePromise = new Promise<Buffer>((resolve, reject) => {
      archive.on('end', () => resolve(Buffer.concat(chunks)));
      archive.on('error', reject);
    });

    let filesAdded = 0;
    for (const [sourceFile, zipName] of Object.entries(ALLOWED_FILES)) {
      const filePath = join(downloadDir, sourceFile);
      if (existsSync(filePath)) {
        archive.file(filePath, { name: zipName });
        filesAdded++;
      }
    }

    if (filesAdded === 0) {
      console.error('No download files found in:', downloadDir);
      return new NextResponse('Download files not found', { status: 500 });
    }

    await archive.finalize();
    const zipBuffer = await archivePromise;

    return new NextResponse(zipBuffer as unknown as BodyInit, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="ZENDADDY_GODFLICK_v3.0_PRO.zip"',
      },
    });

  } catch (error) {
    console.error('Download error:', error);
    return new NextResponse('Download failed', { status: 500 });
  }
}
