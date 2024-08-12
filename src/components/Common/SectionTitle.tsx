const SectionTitle = ({
    subtitle,
  title,
  paragraph,
  width = "570px",
  center,
  mb = "50px",
    subtitle_color = ""
}: {
  subtitle: string
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  subtitle_color?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        {/*sm:text-4xl md:text-[45px]*/}
        <h4 className="mb-4 text-2xl !leading-tight brand-text-primary uppercase font-light" style={{ color: subtitle_color }}>
          {subtitle}
        </h4>
        <h2 className="mb-4 text-3xl font-bold !leading-tight brand-text-dark sm:text-4xl">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
