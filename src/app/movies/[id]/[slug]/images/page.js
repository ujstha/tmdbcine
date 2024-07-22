import { Images, Section, SectionHeading } from "@/components";
import { CustomImage } from "@/components/ui/CustomImage";
import { fetchById } from "@/services";
import { getImageUrl } from "@/utils";

const MediaImages = async ({ params }) => {
  const data = await fetchById("movie", params.id);

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
          <p className="text-2xl">Photos & Backdrops</p>
        </div>
      </div>
      <SectionHeading title={"All Photos & Backdrops"} />
      <Images images={data.images} />
    </Section>
  );
};

export default MediaImages;
