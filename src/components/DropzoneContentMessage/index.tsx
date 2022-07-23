import DropzoneContentMessageProps from './types';

export default function DropzoneContentMessage({
  isDragActive,
  isDragReject,
}: DropzoneContentMessageProps) {
  if (!isDragActive) {
    return (
      <>
        <p>
          Você também pode selecionar o arquivo clicando na{' '}
          <span>área tracejada</span>.
        </p>

        <div>
          <p>
            <strong>Observação</strong>: Apenas arquivos com a extensão{' '}
            <strong>.csv</strong> são suportados.
          </p>
        </div>
      </>
    );
  }

  if (isDragReject) {
    return (
      <p>
        Arquivo não suportado, por favor, selecione um arquivo com a extensão
        .csv
      </p>
    );
  }

  return <p>Arquivo válido, por favor, solte o arquivo aqui.</p>;
}
