import styled from "styled-components";

const Wrapper = styled.div`
    height: 6rem;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
    background: var(--primary);
    
    .link {
        margin-left: 30px;
        font-size: 25px;
        text-align: center;
        color: white;
    }

    .separator {
        flex: 1 1 auto;
    }
`

export default Wrapper;