import React from 'react'

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {

    const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            {pageNumbers.map((pageNumber) => (
                <li key={pageNumber} >
                    <a onClick={() => paginate(pageNumber)}>
                        {pageNumber}
                    </a>
                </li>
            ))}
        </div>
    )
}

export default Pagination
