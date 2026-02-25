import { FC, Suspense } from "react";
import { RacketContainer } from "@/containers/RacketContainer/RacketContainer";
import { Loader } from "@/components/Loader/Loader";
import { getRacketByIdMeta } from "@/services/get-racket-by-id-meta";

export async function generateMetadata({ params }: PageProps<"/racket/[id]">) {
  const { id } = await params;

  const { data, isError } = await getRacketByIdMeta(id);

  if (isError || !data) {
    return {
      title: "Tennis racket",
      description: "Tennis racket",
    };
  }

  return {
    title: data.name,
    description: data.brand.name,
  };
}

const RacketPage: FC<PageProps<"/racket/[id]">> = async ({ params }) => {
  const { id } = await params;

  return (
    <Suspense fallback={<Loader />}>
      <RacketContainer id={id} />
    </Suspense>
  );
};

export default RacketPage;
