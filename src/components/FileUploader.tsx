import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import blankImageIllustration from "@/assets/blank_image.svg";
import { cn } from "@/lib/utils";

export function FileComponent({
  imageUrl,
  isImageGenerating,
  setUploadedFile,
  file,
}) {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles[0]);
    setUploadedFile(acceptedFiles[0]);
  }, []);

  console.log(file);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className={`flex w-full items-center justify-center text-center ${
        isImageGenerating ? "pointer-events-none opacity-50" : ""
      }`}
      htmlFor="imageFile"
      {...getRootProps()}
    >
      <div className="flex flex-col items-center justify-center py-2 w-full">
        <>
          {" "}
          <input
            type="file"
            //   accept=".png, .jpg, .jpeg, .webp, .svg"
            id="imageFile"
            //   className="hidden"
            {...getInputProps()}
          />
          <div
            className={cn(
              "w-full h-20 rounded-lg border-2 border-dashed bg-slate-100 flex justify-center items-center",
              {
                "cursor-pointer": isDragActive,
              }
            )}
          >
            {isDragActive ? (
              "Drop the file here ..."
            ) : file ? (
              <div className="flex items-end gap-3">
                <span>{file.name}</span>{" "}
                <span className="text-slate-400 text-xs">
                  {(file.size / (1024 * 1024)).toFixed(2)}mb
                </span>
              </div>
            ) : (
              <p className="px-5 text-xs">
                Upload file or drag and drop them to this area.
              </p>
            )}
          </div>
        </>
      </div>
    </div>
  );
}

export default FileComponent;

// <div {...getRootProps()}>
//   <input {...getInputProps()} />
//   {isDragActive ? (
//     <p>Drop the files here ...</p>
//   ) : (
//     <p>Drag 'n' drop some files here, or click to select files</p>
//   )}
// </div>
