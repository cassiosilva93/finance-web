import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Container } from './style';

interface PaginationProps {
  limit: number;
  total: number;
  offset: number;
  setOffset: Function;
}

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export default function Pagination({
  limit,
  total,
  offset,
  setOffset,
}: PaginationProps) {
  const currentPage = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const firstPage = Math.max(currentPage - MAX_LEFT, 1);

  function handlePageChange(page: number) {
    setOffset((page - 1) * limit);
  }

  return (
    <Container>
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <AiOutlineArrowLeft size={17} />
        </button>
      </div>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + firstPage)
        .map(page => {
          return (
            <div key={page}>
              <button onClick={() => handlePageChange(page)}>{page}</button>
            </div>
          );
        })}
      <div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === pages}
        >
          <AiOutlineArrowRight size={17} />
        </button>
      </div>
    </Container>
  );
}
