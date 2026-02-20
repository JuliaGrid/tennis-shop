import { Catalog } from "@/components/Catalog/Catalog";
import { NoData } from "@/components/NoData/NoData";
import { IRacket } from "@/types/Racket";
import { IResponse } from "@/types/Request";

interface IRacketsCarousel {
  apiRequest?: (page?: number, limit?: number) => Promise<IResponse<IRacket[]>>;
}

export default async function RacketsCatalog(props: IRacketsCarousel) {
  const { apiRequest } = props;
  const response = await apiRequest?.(1, 20);

  if (response?.isError) {
    return <NoData />;
  }

  return <Catalog rackets={response?.data} />;
}
