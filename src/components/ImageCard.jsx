import PropTypes from "prop-types";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="max-w-sm h-[500px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto flex flex-col ">
      <div className=" ">
        <img
          src={image.webformatURL}
          alt=""
          className="rounded-t-lg object-cover h-48 w-96 "
        />
      </div>
      <div className="px-6  text-center flex flex-col justify-center items-center  h-full">
        <p className="font-bold  text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </p>
      </div>
      <ul className="px-6  w-full  h-full">
        <li className="space-x-2">
          <strong>Views:</strong>
          <span>{image.views}</span>
        </li>
        <li className="space-x-2">
          <strong>Downloads:</strong>
          <span>{image.downloads}</span>
        </li>
        <li className="space-x-2">
          <strong>Likes:</strong>
          <span>{image.likes}</span>
        </li>
      </ul>

      <div className="px-6  w-full   h-full">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1  text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
};
export default ImageCard;
