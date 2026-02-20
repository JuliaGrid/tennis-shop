import { FC, Suspense } from "react";
import { RacketContainer } from "@/containers/RacketContainer/RacketContainer";
import { Loader } from "@/components/Loader/Loader";

const RacketPage: FC<PageProps<"/racket/[id]">> = async ({ params }) => {
  const { id } = await params;

  return (
    <Suspense fallback={<Loader />}>
      <RacketContainer id={id} />
    </Suspense>
  );
};

export default RacketPage;
