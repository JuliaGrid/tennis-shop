import { Carousel } from "@/components/Carousel/Carousel";
import { IRacket } from "@/types/Racket";
import { IResponse } from "@/types/Request";

interface IRacketsCarousel {
  apiRequest?: () => Promise<IResponse<IRacket[]>>;
}

export default async function RacketsCarousel(props: IRacketsCarousel) {
  const { apiRequest } = props;
  const response = await apiRequest?.();

  if (response?.isError) {
    return <>No</>;
  }

  return <Carousel rackets={response?.data} />;
}
