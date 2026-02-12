

export default function SingleProductPopUp({
    title, price, image
}) {
  return (
  <div className="fixed m-auto inset-0 h-[77%] lg:w-[45%] sm:w-[90%] max-sm:w-[90%] overflow-scroll  z-40 bg-white shadow-2xl rounded-lg flex-col flex justify-between">
  <div className="w-full my-2 flex flex-col gap-4">
    <div className="px-2 py-1 border-b border-gray-200 flex justify-between items-center">
      <div className="flex-1 flex-col justify-center items-center flex translate-x-4">
        <p className="text-gray-900 text-lg font-extrabold">
          {title}
        </p>
      
      </div>
      <div className="cursor-pointer w-6 h-6 relative z-40 font-extrabold">
        X
      </div>
    </div>
    <img
      src={image}
      className="h-16 w-16 mx-auto rounded-full"
    />

    <div>
        <p>Price: {price}</p>
    </div>
 
  </div>
 
</div>

  )
}
