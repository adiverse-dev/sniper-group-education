function getInitials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function AvatarIcon({
  name,
  size = 44,
  borderRadius = "50%",
  background = "rgba(13,27,62,0.85)",
  color = "white",
  fontSize = 18,
  fontWeight = 700,
  style = {},
}) {
  const initials = getInitials(name);

  return (
    <div
      aria-hidden="true"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius,
        background,
        color,
        fontSize: `${fontSize}px`,
        fontWeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style,
      }}
    >
      {initials || "?"}
    </div>
  );
}
