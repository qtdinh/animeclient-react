import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;

    table {
        width: 100%;
        border-collapse: collapse;
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
`;

export default Wrapper;