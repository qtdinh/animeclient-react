import styled from "styled-components";

const Wrapper = styled.div`
    table {
        width: 100%;
        border-collapse:collapse;
    }

    .even-row {
        background-color: #f2f2f2; 
    }

    tr:nth-child(even) {
        background-color: #f2f2f2; 
    }

    td {
        text-align: center;
    }

    tr:nth-child(odd) {
        background-color: #ffffff;
        border: none;
        padding: none;
        margin-bottom: 10px;
    }

    ul {
        padding: 0;
    }
`

export default Wrapper;