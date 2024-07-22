import { Credits, Section, SectionHeading } from "@/components";
import { CustomImage } from "@/components/ui/CustomImage";
import { fetchCreditsByMediaId } from "@/services";
import { getImageUrl } from "@/utils";

const MediaCredits = async ({ params }) => {
  const data = await fetchCreditsByMediaId("movie", params.id);

  console.log({ datasfd: data });
  if (!data) return null;

  return (
    <Section>
      <div className="flex gap-6">
        <CustomImage
          src={getImageUrl(data.poster_path)}
          alt={data.title}
          height={100}
          width={65}
          style={{ height: "auto" }}
          className="rounded-md bg-tcborder text-xxs"
        />
        <div>
          <h1 className="text-xl font-semibold">
            {data.title}{" "}
            <small className="text-xs text-secondary">
              ({data.release_year})
            </small>
          </h1>
          <p className="text-2xl">Full Cast & Crews</p>
        </div>
      </div>
      <SectionHeading title={"Cast"} />
      <Credits credits={data.credits.cast} />
      <SectionHeading title={"Crews"} />
      <Credits credits={data.credits.crew} />
    </Section>
  );
};

export default MediaCredits;
