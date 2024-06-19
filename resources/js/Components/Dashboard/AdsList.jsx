import { Link } from "@inertiajs/inertia-react";
import AdsListHeader from "./AdsListHeader";
import AdsListEmpty from "./AdsListEmpty";
import AdsListTable from "./AdsListTable";

const AdsList = ({
    ads,
    title,
    lastColumn,
    nextRoute,
    lastColumn2,
    nextRoute2,
}) => {
    const isEmpty = ads.length === 0;
    return (
        <div className=" mx-auto">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="overflow-x-auto">
                <div
                    className={`grid grid-cols-${lastColumn2 ? "7" : "6"}
                    `}
                    style={{
                        gridTemplateColumns: `repeat(${
                            lastColumn2 ? "7" : "6"
                        }, minmax(0, auto))`,
                    }}
                >
                    <AdsListHeader
                        lastColumn={lastColumn}
                        lastColumn2={lastColumn2}
                        nextRoute2={nextRoute2}
                    />

                    {isEmpty ? (
                        <AdsListEmpty lastColumn2={lastColumn2} />
                    ) : (
                        <AdsListTable
                            ads={ads}
                            nextRoute={nextRoute}
                            lastColumn={lastColumn}
                            title={title}
                            lastColumn2={lastColumn2}
                            nextRoute2={nextRoute2}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdsList;
