import React, { useState } from 'react';
import { Col, Nav, Card } from 'react-bootstrap';
import search from '../../assets/images/search.png';
import Tab from '../../Componant/Common/Tab/Tab';
import report from "../../assets/images/Report1.jpg";
import visa from "../../assets/images/Get a new visa.jpg";
import { useTranslation } from "react-i18next";
import Propertymatch from '../../Componant/Report/Propertymatch';
import Clientmatch from '../../Componant/Report/Clientmatch';
import './Report.css'
import Clientmatch_mobile from '../../Componant/Report/Clientmatch_mobile';
import Propertymatch_mobile from '../../Componant/Report/Propertymatch_mobile';
import { AiOutlineClose } from "react-icons/ai";
import { reportData, reportDataRecent } from '../../Services/ReportServices';

const Report = () => {
    const { t, i18n } = useTranslation();
    const justifyContent = i18n.language === "he" ? "start" : "end";
    const [activeTab, setActiveTab] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [selectedSuggestion, setSelectedSuggestion] = useState(null);
    const [selectedProperties, setSelectedProperties] = useState([]);
    const [searchTermRecent, setSearchTermRecent] = useState("");
    const [filteredProperties, setFilteredProperties] = useState([]);

    const [address] = useState([
        { client_name: 'Haifa, Kiryat, Nesher', email_phone: 'haifa@example.com' },
        { client_name: 'חיפה, קריות, נשר', email_phone: 'kiryat@example.com' }
    ]);

    const handleSearch = (e) => {
        const value = e?.target?.value || "";
        setSearchTerm(value);

        if (value.trim() === "") {
            setSuggestions([]);
            return;
        }

        if (activeTab === "all") {
            const filteredProperties = reportData.suggestions.filter(suggestion =>
                t(suggestion.client_name).toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredProperties);
        } else if (activeTab === "recent") {
            const filteredAddress = address.filter(addr =>
                addr.client_name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredAddress);
        }
    };
    const handleSearchRecent = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTermRecent(value);

        if (value.trim() === "") {
            setFilteredProperties([]);
            return;
        }

        const filtered = reportDataRecent.recentSearches.filter(property =>
            property.address.toLowerCase().startsWith(value)
        );

        setFilteredProperties(filtered);
    };


    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(t(suggestion.client_name));
        setSuggestions([]);
        setSelectedSuggestion(suggestion);
        setSelectedProperties(suggestion.properties);
    };

    return (
        <div className='position-relative'>
            <Col className=' bg-white shadow-lg rounded-3 px-3'>
                <p className="py-3 mb-4 screen-1 text-center border-bottom d-none d-md-block">{t("report_title")} </p>
                <div className='custom-scrollbar overflow-y-auto overflow-x-hidden px-3 mt-4 mb-md-0 mb-4 scroll-height'>
                    <div className='w-100 border-bottom'>
                        <Nav variant="tabs" className="mx-md-3 pt-2 border-0">
                            <Tab
                                className={`border-0 fs-5 text-nowrap fw-normal px-1 lh-1 text-md-start  text-center text-md-start ${activeTab === "all" ? "active-tab" : ""}`}
                                onClick={() => setActiveTab("all")}
                                children={t("tab_all")}
                                tab={true}
                            />
                            <Tab
                                className={`border-0 text-center fs-5 fw-normal text-nowrap lh-1 text-md-start ${activeTab === "recent" ? "active-tab" : ""}`}
                                onClick={() => setActiveTab("recent")}
                                children={t("tab_recent")}
                                tab={true}
                            />
                        </Nav>
                    </div>
                    <div className="mt-4 mb-md-0 mb-4">
                        {activeTab === "all" && (
                            <>
                                <div className="row px-1 position-relative">
                                    <div className="col-12 col-md-8 ">
                                        <div className="border border-[#D6D6D6] rounded py-1 px-3">
                                            <div className="d-flex">
                                                <input
                                                    type="text"
                                                    className="form-control border-0 p-0"
                                                    placeholder={t("search_placeholder_all")}
                                                    value={searchTerm}
                                                    onChange={handleSearch}
                                                />
                                                <button className="btn" type="button">
                                                    <img src={search} alt="Search" />
                                                </button>
                                            </div>
                                        </div>
                                        {suggestions.length > 0 && (
                                            <ul className="suggestions-list position-absolute w-100 bg-white z-1 pl-0" style={{ top: "100%", left: 0 }}>
                                                {suggestions.map((suggestion, index) => (
                                                    <li key={index} className="px-3 py-1" onClick={() => handleSuggestionClick(suggestion)}>
                                                        <Card className="p-3 shadow-sm border mb-3 mb-md-0 rounded">
                                                            <div className="align-items-center row">
                                                                <div className="d-flex justify-content-between align-item-center">
                                                                    <div className="d-flex flex-column">
                                                                        <strong className="d-block mb-1 fs-15">
                                                                            {t(suggestion.client_name)}
                                                                        </strong>
                                                                        <span className="text-muted fs-15">{t(suggestion.email_phone)}</span>
                                                                    </div>
                                                                    <AiOutlineClose
                                                                        size={20}
                                                                        className="text-dark cursor-pointer my-2"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>

                                {selectedSuggestion ? (
                                    <Propertymatch properties={selectedProperties} />
                                ) : (
                                    <div>
                                        <div className='mt-4'>
                                            <p className='fs-17 fw-normal lh-1'>{t("description_1")}</p>
                                            <p className='fs-17 fw-normal lh-1'>{t("description_2")}</p>
                                            <p className='fs-17 fw-normal lh-1'>{t("description_3")}</p>
                                        </div>
                                        <div className="mt-5 mb-2 d-none d-md-flex justify-content-end">
                                            <img src={report} alt="visa" className='img-fluid h-75' />
                                        </div>
                                    </div>
                                )}
                            </>
                        )}

                        {activeTab === "recent" && (
                            <>
                                <div className="row px-1 position-relative">
                                    <div className="col-12 col-md-8">
                                        <div className="border border-[#D6D6D6] rounded py-1 px-3">
                                            <div className="d-flex">
                                                <input
                                                    type="text"
                                                    className="form-control border-0 p-0"
                                                    placeholder={t("search_placeholder_recent")}
                                                    value={searchTermRecent}
                                                    onChange={handleSearchRecent}
                                                />
                                                <button className="btn" type="button">
                                                    <img src={search} alt="Search" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {searchTermRecent.trim() !== "" ? (
                                    filteredProperties.length > 0 ? (
                                        <Clientmatch properties={filteredProperties} />
                                    ) : (
                                        <div className="text-center py-5">
                                            <p className="fs-17 fw-normal lh-1 text-muted">
                                                {t("no_data_available")}
                                            </p>
                                        </div>
                                    )
                                ) : (
                                    <>
                                        <div>
                                            <div className='mt-4'>
                                                <p className='fs-17 fw-normal lh-1'>{t("description_1")}</p>
                                                <p className='fs-17 fw-normal lh-1'>{t("description_4")}</p>
                                                <p className='fs-17 fw-normal lh-1'>{t("description_5")}</p>
                                            </div>
                                            <div className="mt-5 mb-2 d-none d-md-flex justify-content-end">
                                                <img src={visa} alt="visa" className='img-fluid h-75' />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </Col>

            {activeTab === "recent" && (
                searchTermRecent.trim() !== "" ? (
                    filteredProperties.length > 0 ? (
                        <div className="d-block d-md-none">
                            <Clientmatch_mobile properties={filteredProperties} />
                        </div>
                    ) : (
                        null
                    )
                ) : <div className={`mt-5 mb-2 d-block d-md-none justify-content-${justifyContent}`}>
                    <img src={visa} alt="report" className="img-fluid h-75" />
                </div>
            )}

            {activeTab === "all" && (
                selectedSuggestion ? (
                    <>
                        <div className=' d-block d-md-none'>
                            <Propertymatch_mobile properties={selectedProperties} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className={`mt-5 mb-2 d-block d-md-none justify-content-${justifyContent}`}>
                            <img src={report} alt="visa" className='img-fluid h-75' />
                        </div>
                    </>
                )
            )}
            <div className="w-100   py-2 bg-[#FFFFFFD6] d-flex justify-content-center" style={{ position: "sticky", bottom: "0" }}>
                <button className="agent-btn-responsive1 text-white fw-bold h-25 shadow w-25 py-2 mt-3 rounded-pill">{t("send_btn")}</button>
            </div>
        </div>
    )
}

export default Report;
