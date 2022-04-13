import { ReactNode } from 'react';

type MainProps = {
  children: ReactNode;
};
// componenete provisorio para testar se jest esta funcionando
export function Main({ children }: MainProps) {
  return (
    <main>
      <h1>{children}</h1>
    </main>
  );
}
