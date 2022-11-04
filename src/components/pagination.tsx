import classNames from "classnames";

interface PaginationProps {
  rowsPerPage: number;
  totalPages: number;
  paginate: any;
}

const Pagination = ({ rowsPerPage, totalPages, paginate }: PaginationProps) => {
  const pagesCount = [];

  for (let i = 1; i <= Math.ceil(totalPages / rowsPerPage); i++) {
    pagesCount.push(i);
  }

  return (
    <>
      <nav>
        <ul className="flex justify-center">
          {pagesCount.map((number) => (
            <li key={number} className="m-2">
              <a onClick={() => paginate(number)} href="#" className="">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
