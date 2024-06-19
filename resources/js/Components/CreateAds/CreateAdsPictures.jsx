import React from "react";

const CreateAdsPictures = ({ data, setData, errors, handleChange }) => {
    return (
        <div className="create-category">
            <div className="create-category-title">Overview</div>

            <div className="create-category-input">
                <span className="create-category-span">
                    Pictures:{" "}
                    <span className="create-category-span-legend">
                        (.jpg or .png, max. 2MB per file, min 3 photos, max 10
                        photos, min 500px width & height)
                    </span>
                </span>

                <div className="create-category-input-file">
                    <input
                        type="file"
                        className="file-input"
                        id="customFileInput"
                        name="photos"
                        onChange={(e) => {
                            setData("photos", e.target.files);
                        }}
                        multiple
                    />
                    <label htmlFor="customFileInput" className="file-label">
                        Choose your pictures by clicking here or droping them
                        down
                    </label>
                </div>
                {errors["photos"] && <div>{errors["photos"]}</div>}
                {Object.keys(errors).map((x, i) => (
                    <>
                        {x.match(/photos\.*/) && (
                            <p key={i}>
                                Photo {parseInt(x.replace("photos.", "")) + 1}:{" "}
                                {errors[x]}
                            </p>
                        )}
                    </>
                ))}
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Description</span>
                <textarea
                    type="text"
                    value={data.description}
                    name="description"
                    onChange={handleChange}
                    className="create-category-input-textarea"
                    rows="8"
                />
                {errors.description && <div>{errors.description}</div>}
            </div>
            <div className="create-category-input">
                <span className="create-category-span">Surroundings</span>
                <textarea
                    type="text"
                    value={data.surroundings}
                    name="surroundings"
                    onChange={handleChange}
                    className="create-category-input-textarea"
                    rows="8"
                />
                {errors.surroundings && <div>{errors.surroundings}</div>}
            </div>
        </div>
    );
};

export default CreateAdsPictures;
