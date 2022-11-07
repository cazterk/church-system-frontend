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

  let liClassName =
    "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";

  return (
    <>
      <nav>
        <ul className="flex justify-center m-4">
          {pagesCount.map((number) => (
            <a
              onClick={() => paginate(number)}
              href="#"
              className=""
              key={number}
            >
              <li className={`${liClassName}`}>{number}</li>
            </a>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
