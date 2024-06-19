import React from "react";
import ValidationField from "./ValidationField";

const CreateAdsCategory = ({ data, handleChange, ad }) => {
    return (
        <div className="create-category">
            <div className="create-category-title">Validation</div>

            <div className="create-category-input mt-8">
                <span className="create-category-span">Construction year</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.property.year_construction}
                        name="year_construction"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"year_construction_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>
            {ad.property.year_renovation && (
                <div className="create-category-input">
                    <span className="create-category-span">
                        Renovation year
                    </span>
                    <div className="flex justify-between">
                        <input
                            type="text"
                            value={ad.property.year_renovation}
                            name="year_renovation"
                            className="validate-input-field"
                            disabled
                        />
                        <ValidationField
                            name={"year_renovation_rejected"}
                            onChange={handleChange}
                            data={data}
                        />
                    </div>
                </div>
            )}

            <div className="create-category-input">
                <span className="create-category-span">Ground surface</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.property.surface}
                        name="surface"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"surface_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Livable surface</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.property.livable_surface}
                        name="livable_surface"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"livable_surface_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">Terrain surface</span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.property.terrain_surface}
                        name="terrain_surface"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"terrain_surface_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">
                    Total number of floor in the building
                </span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.property.floors}
                        name="floors"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"floors_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>

            <div className="create-category-input">
                <span className="create-category-span">
                    Floor of the property
                </span>
                <div className="flex justify-between">
                    <input
                        type="text"
                        value={ad.property.floor}
                        name="floor"
                        className="validate-input-field"
                        disabled
                    />
                    <ValidationField
                        name={"floor_rejected"}
                        onChange={handleChange}
                        data={data}
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateAdsCategory;
