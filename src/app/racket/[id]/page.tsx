import { FC, Suspense } from "react";
import { RacketContainer } from "@/containers/RacketContainer/RacketContainer";

const RacketPage: FC<PageProps<"/racket/[id]">> = async ({ params }) => {
  const { id } = await params;

  return (
    <Suspense fallback={<div>loading</div>}>
      <RacketContainer id={id} />
    </Suspense>
  );
};

export default RacketPage;
