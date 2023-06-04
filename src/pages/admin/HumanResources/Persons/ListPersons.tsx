import persons from "@/mocks/persons";
import Paginator from "@/components/Pagination/Pagination";
import PersonsFilter from "@/components/filters/PersonsFilters";
import PersonsTable from "@/components/tables/PersonsTable";

const ListPersons = () => {
  return (
    <>
      <PersonsFilter />
      <PersonsTable persons={persons} />
      <Paginator />
    </>
  );
};

export default ListPersons;
