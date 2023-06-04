import { styled } from "@mui/system";

const ImageContainer = styled("div")`
  position: relative;
  width: 100%;
  padding-top: 100%; /* Aspect ratio of 1:1 */
`;

const Image = styled("img")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Hide redundant parts */
`;

interface Props {
  src: string;
}

const AvatarContainer: React.FC<Props> = ({ src }) => {
  return (
    <ImageContainer>
      <Image src={src} alt="Avatar" />
    </ImageContainer>
  );
};

export default AvatarContainer;
