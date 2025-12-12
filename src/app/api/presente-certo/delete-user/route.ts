import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '../../../../../config/firebase-admin';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'E-mail é obrigatório.' }, { status: 400 });
    }

    const user = await adminAuth.getUserByEmail(email);
    await adminAuth.deleteUser(user.uid);

    return NextResponse.json({ message: 'Usuário excluído com sucesso.' });
  } catch (error: unknown) {
    if (
      error &&
      typeof error === 'object' &&
      'code' in error &&
      error.code === 'auth/user-not-found'
    ) {
      return NextResponse.json({ error: 'Usuário não encontrado.' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Ocorreu um erro ao excluir o usuário.' }, { status: 500 });
  }
}
