import type { NextPage } from "next";
import { useQuery } from "react-query";
import { hello } from "../src/services/hello";

const Home: NextPage = () => {
  const { status, isError, error, isLoading } = useQuery<any, any>(
    "todos",
    () => hello({ code: "A" })
  );

  if (isLoading) {
    return <div>로딩 중</div>;
  }

  if (status === "error" || isError) {
    return (
      <>
        <div>{error?.message}</div>
      </>
    );
  }

  return <div>성공페이지</div>;
};

export default Home;
