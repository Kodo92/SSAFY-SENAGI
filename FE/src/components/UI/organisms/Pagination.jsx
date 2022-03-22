import styled from "@emotion/styled";
import { useEffect } from "react";

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  //페이지 버튼 클릭시 스크롤 위로
  useEffect(() => {
    window.scrollTo(0, 300);
  }, [page]);

  return (
    <div>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
         <ChevronLeftIcon fontSize="small"/>
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1) } disabled={page === numPages}>
         <ChevronRightIcon fontSize="small"/>
        </Button>
      </Nav>
    </div>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 16px;
`;

const Button = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 3px;
  padding: 10px;
  margin: 0;
  background: white;
  color: black;
  font-size: 1rem;
  box-shadow: 1px 1px 1px 1px gray;

  &:hover {
    background: #F4BA3499;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: white;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #F4BA3499;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;