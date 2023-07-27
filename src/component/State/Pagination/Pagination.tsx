type Props = {
  totalState: number;
  statePerPage: number;
  paginate: Function;
};

export const Pagination = ({ totalState, statePerPage, paginate }: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalState / statePerPage); i++) {
    pageNumbers.push(i);
  }
 
  return (
    <div className="state__button">
      {pageNumbers.map((number) => (
        <button onClick={() => paginate(number)}>{number}</button>
      ))}
    </div>
  );
};
