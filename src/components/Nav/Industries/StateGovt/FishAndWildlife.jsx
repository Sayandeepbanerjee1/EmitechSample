import React from "react";
import Partners from "../../../Partner";

  const FishAndWildlife = () => {
    const tableData = [
        {
            link: 'http://solutions.arcgis.com/state-government/fish-wildlife/',
            linkText: 'Collect and Manage Citizen Science Observations',
            imageSrc: 'http://solutions.arcgis.com/state-government/img/CitizenScienceFeatureCollection.png',
            imageAlt: 'Collect and Manage Citizen Science Observations',
            description:
                'A collection of maps and apps used by citizens and natural resources staff to file and curate reports of wild plant and animal life.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/fish-wildlife/',
            linkText: 'Survey Wildlife Photos',
            imageSrc: 'http://solutions.arcgis.com/state-government/img/WildlifePhotoSurveyFeatureStory.png',
            imageAlt: 'Survey Wildlife Photos',
            description:
                'The Wildlife Photo Survey application can be used by staff to collect valuable information about wildlife using photos captured from camera traps in the wild.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/fish-wildlife/',
            linkText: 'Wildlife Management Area Locator',
            imageSrc: 'http://solutions.arcgis.com/local-government/entire-organization/img/ModelOrganization.png',
            imageAlt: 'Wildlife Management Area Locator',
            description:
                'Wildlife Management Area Locator facilitates access to Wildlife Management Areas (WMAs) and helps citizens understand what requirements have to be met to hunt in the WMA.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/fish-wildlife/',
            linkText: 'Hunting License Locator',
            imageSrc: 'http://solutions.arcgis.com/state-government/fish-wildlife/img/licenselocator.png',
            imageAlt: 'Hunting License Locator',
            description:
                'An application configuration that enables hunters to find a location to buy a hunting license in the state.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/fish-wildlife/',
            linkText: 'Understand and Communicate Environmental Impact',
            imageSrc: 'http://solutions.arcgis.com/state-government/img/EnvironmentalImpactFeatureCollection.png',
            imageAlt: 'Understand and Communicate Environmental Impact',
            description:
                'Use a suite of apps to help interested parties understand potential impacts, brief executives and decision-makers, and elicit feedback from the community.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/fish-wildlife/',
            linkText: 'Water Access Locator',
            imageSrc: 'http://solutions.arcgis.com/local-government/entire-organization/img/DataReviewerforBasemaps.png',
            imageAlt: 'Water Access Locator',
            description:
                'Water Access Locator is an application that facilitates access to boat ramps, marinas, and fishing sites in the state.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/fish-wildlife/',
            linkText: 'Facilitate Water Quality Inspections',
            imageSrc: 'http://solutions.arcgis.com/state-government/health/img/WaterQualityField.png',
            imageAlt: 'Facilitate Water Quality Inspections',
            description:
                'Water Quality Inspections is a configuration of EMI Online and the Collector for EMI application that supports the collection of waterway inspection information.',
        },
        {
            link: 'http://solutions.arcgis.com/state-government/fish-wildlife/',
            linkText: 'Communicate Water Quality',
            imageSrc: 'http://solutions.arcgis.com/state-government/fish-wildlife/img/waterquality.png',
            imageAlt: 'Communicate Water Quality',
            description:
                'An application configuration that enables citizens to find out water quality status based on monitored parameters.',
        },
    ];

  return (
    <>
        <section className="bg-gray-100 py-12 px-6 md:px-20 mt-20">
            <div className="mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                Fish and Wildlife
                </h2>
                <div className="flex flex-col items-center mb-6 gap-8">
                    <div className="w-full flex justify-center">
                    <img
                        src="http://solutions.arcgis.com/assets/images/state-fish-wildlife.jpg"
                        alt="Land Records Overview"
                        className="rounded-lg shadow-lg w-full max-w-xl"
                    />
                    </div>
                    <div className="lg:w-2/3 text-gray-700 space-y-6 text-justify">
                    <p>
                    Maps and applications that serve the needs of citizens in the state, and facilitate access to hunting and fishing locations and licenses, and enable discovery of recreational locations in the state.
                    </p>
                    </div>
                </div>

                <div className="grid gap-6 md:gap-8 lg:gap-10">
                    {/* Cards for Mobile */}
                                <div className="block md:hidden space-y-6">
                                {tableData.map((item, index) => (
                                    <div
                                    key={index}
                                    className="bg-white text-center rounded-lg shadow-lg p-6 space-y-4"
                                    >
                                    <a
                                        href={item.link}
                                        className="font-bold text-green-600 hover:text-green-700 text-lg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.linkText}
                                    </a>
                                    <div className="flex justify-center">
                                        <img
                                        src={item.imageSrc}
                                        alt={item.imageAlt}
                                        className="rounded-lg shadow-md w-full max-w-xs"
                                        />
                                    </div>
                                    <p className="text-gray-600 text-justify">{item.description}</p>
                                    </div>
                                ))}
                                </div>

                        {/* Table for Desktop */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="table-auto border-collapse border border-gray-300 w-full text-gray-700">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border border-gray-300 px-4 py-2 text-center w-1/4">
                                        Link
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2 text-center w-1/3">
                                        Image
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2 text-center w-1/2">
                                        Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((item, index) => (
                                        <tr key={index}>
                                            <td className="border border-gray-300 px-4 py-2 text-center">
                                                <a
                                                href={item.link}
                                                className="font-bold text-green-600 hover:text-green-700"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                >
                                                {item.linkText}
                                                </a>
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2 text-center">
                                                <div className="flex justify-center">
                                                <img
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="rounded-lg shadow-lg w-full max-w-xs"
                                                />
                                                </div>
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2 text-justify">
                                                {item.description}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
        </section>
        <Partners />
    </>
    );
};

export default FishAndWildlife;
