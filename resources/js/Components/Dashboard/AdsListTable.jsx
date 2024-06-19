import React from "react";
import { Link } from "@inertiajs/inertia-react";

const AdsListTable = ({
    ads,
    nextRoute,
    lastColumn,
    nextRoute2,
    lastColumn2,
}) => {
    return (
        <>
            {ads.map((ad) => (
                <React.Fragment key={ad.id}>
                    <div className="py-2 px-4 border border-gray-300 flex items-center dash-line">
                        <Link href={route(`ads.show`, [ad.id])} method="get">
                            {ad.property.property_type}
                        </Link>
                    </div>
                    <div className="py-2 px-4 border border-gray-300 flex items-center">
                        <Link href={route(`ads.show`, [ad.id])} method="get">
                            {ad.type}
                        </Link>
                    </div>
                    <div className="py-2 px-4 border border-gray-300 flex items-center">
                        <Link href={route(`ads.show`, [ad.id])} method="get">
                            {ad.property.city}
                        </Link>
                    </div>
                    <div className="py-2 px-4 border border-gray-300 flex items-center">
                        <Link href={route(`ads.show`, [ad.id])} method="get">
                            {ad.title}
                        </Link>
                    </div>
                    <div className="py-2 px-4 border border-gray-300 flex items-center">
                        <Link href={route(`ads.show`, [ad.id])} method="get">
                            € {ad.price.toLocaleString()}
                        </Link>
                    </div>

                    <div className="py-2 px-4 border border-gray-300 flex items-center">
                        <div className="dash-content-del">
                            <Link href={route(nextRoute, [ad.id])} method="get">
                                {lastColumn}
                            </Link>
                        </div>
                    </div>

                    {lastColumn2 && (
                        <div className="py-2 px-4 border border-gray-300 flex items-center">
                            <div className="dash-content-del">
                                <Link
                                    href={route(nextRoute2, [ad.id])}
                                    method="get"
                                >
                                    {lastColumn2}
                                </Link>
                            </div>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </>
    );
};

export default AdsListTable;
