export const PrivacyPolicy = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-bold py-4">Política de Privacidade</h1>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="prose prose-lg max-w-none">
        <pre className="whitespace-pre-wrap font-sans text-base leading-relaxed">
          {content}
        </pre>
      </div>
    </div>
  );
};
