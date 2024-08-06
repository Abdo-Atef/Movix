type GenersListProps = {
  genersIds: number[];
  genereClass?: string;
  genereStyle?: React.CSSProperties;
  AllGeners: { id: number; name: string }[];
};

export default function GenersList({
  genersIds,
  genereClass,
  genereStyle,
  AllGeners,
}: GenersListProps) {
  return (
    <>
      {genersIds?.length > 0 && AllGeners ? (
        <>
          {genersIds?.map((g) => {
            if (!AllGeners[g]?.name) return;
            return (
              <div key={g} className={genereClass} style={genereStyle}>
                {AllGeners[g]?.name}
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}
    </>
  );
}
