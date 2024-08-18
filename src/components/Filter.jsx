/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const Filter = () => {
    const [dropDownIdeal, setDropDownIdeal] = useState(true);
    const [dropDownOccation, setDropDownOccation] = useState(true);
    const [dropDownWork, setDropDownWork] = useState(true);
    const [dropDownFebric, setDropDownFebric] = useState(true);
    const [dropDownSegment, setDropDownSegment] = useState(true);
    const [dropDownSuitable, setDropDownSuitable] = useState(true);
    const [dropDownRaw, setDropDownRaw] = useState(true);
    const [dropDownPattern, setDropDownPattern] = useState(true);

    return (
        <div className='filters'>
            <label>
                <input type="checkbox" />
                <p>CUSTOMIZABLE</p>
            </label>
            <div className="border"></div>
            <div className="ideal_for">
                {
                    dropDownIdeal
                        ? <RiArrowDropDownLine className='drop-icon' onClick={() => setDropDownIdeal(!dropDownIdeal)} />
                        : <RiArrowDropUpLine className='drop-icon' onClick={() => setDropDownIdeal(!dropDownIdeal)} />
                }
                <p>IDEAL FOR</p>
                <p className='all'>All</p>
                {
                    dropDownIdeal
                        ? (<></>)
                        : (
                            <div className='inside_ideal_for'>
                                <p className='unselect_all' style={{cursor: 'pointer'}}>unselect all</p>
                                <label>
                                    <input type="checkbox" />
                                    <p>Men</p>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <p>Women</p>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <p>Baby & Kids</p>
                                </label>
                            </div>

                        )
                }

            </div>
            <div className="border"></div>

            <div className="ideal_for">
                {
                    dropDownOccation
                        ? <RiArrowDropDownLine className='drop-icon' onClick={() => setDropDownOccation(!dropDownOccation)} />
                        : <RiArrowDropUpLine className='drop-icon' onClick={() => setDropDownOccation(!dropDownOccation)} />
                }
                <p>OCCASION</p>
                <p className='all'>All</p>
                {
                    dropDownOccation
                        ? (<></>)
                        : (
                            <div className='inside_ideal_for'>
                                <p className='unselect_all' style={{cursor: 'pointer'}}>unselect all</p>
                                <label>
                                    <input type="checkbox" />
                                    <p>Men</p>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <p>Women</p>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <p>Baby & Kids</p>
                                </label>
                            </div>

                        )
                }

            </div>
            <div className="border"></div>

            <div className="ideal_for">
                {
                    dropDownWork
                        ? <RiArrowDropDownLine className='drop-icon' onClick={() => setDropDownWork(!dropDownWork)} />
                        : <RiArrowDropUpLine className='drop-icon' onClick={() => setDropDownWork(!dropDownWork)} />
                }
                <p>WORK</p>
                <p className='all'>All</p>
                {
                    dropDownWork
                        ? (<></>)
                        : (
                            <div className='inside_ideal_for'>
                                <p className='unselect_all' style={{cursor: 'pointer'}}>unselect all</p>
                                <label>
                                    <input type="checkbox" />
                                    <p>Men</p>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <p>Women</p>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <p>Baby & Kids</p>
                                </label>
                            </div>

                        )
                }

            </div>
            <div className="border"></div>

            <div className="ideal_for">
                {
                    dropDownFebric
                        ? <RiArrowDropDownLine className='drop-icon' onClick={() => setDropDownFebric(!dropDownFebric)} />
                        : <RiArrowDropUpLine className='drop-icon' onClick={() => setDropDownFebric(!dropDownFebric)} />
                }
                <p>FEBRIC</p>
                <p className='all'>All</p>
                {
                    dropDownFebric
                        ? (<></>)
                        : (
                            <div className='inside_ideal_for'>
                                <p className='unselect_all' style={{cursor: 'pointer'}}>unselect all</p>
                                <label>
                                    <input type="checkbox" />
                                    <p>Men</p>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <p>Women</p>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <p>Baby & Kids</p>
                                </label>
                            </div>

                        )
                }

            </div>
            <div className="border"></div>

            <div className="ideal_for">
                {
                    dropDownSegment
                        ? <RiArrowDropDownLine className='drop-icon' onClick={() => setDropDownSegment(!dropDownSegment)} />
                        : <RiArrowDropUpLine className='drop-icon' onClick={() => setDropDownSegment(!dropDownSegment)} />
                }
                <p>SEGMENT</p>
                <p className='all'>All</p>
                {
                    dropDownSegment
                        ? (<></>)
                        : (
                            <div className='inside_ideal_for'>
                                <p className='unselect_all' style={{cursor: 'pointer'}}>unselect all</p>
                                <label>
                                    <input type="checkbox" />
                                    <p>Men</p>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <p>Women</p>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <p>Baby & Kids</p>
                                </label>
                            </div>

                        )
                }

            </div>
            <div className="border"></div>

            <div className="ideal_for">
                {
                    dropDownSuitable
                        ? <RiArrowDropDownLine className='drop-icon' onClick={() => setDropDownSuitable(!dropDownSuitable)} />
                        : <RiArrowDropUpLine className='drop-icon' onClick={() => setDropDownSuitable(!dropDownSuitable)} />
                }
                <p>SUITABLE FOR</p>
                <p className='all'>All</p>
                {
                    dropDownSuitable
                        ? (<></>)
                        : (
                            <div className='inside_ideal_for'>
                                <p className='unselect_all' style={{cursor: 'pointer'}}>unselect all</p>
                                <label>
                                    <input type="checkbox" />
                                    <p>Men</p>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <p>Women</p>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <p>Baby & Kids</p>
                                </label>
                            </div>

                        )
                }

            </div>
            <div className="border"></div>

            <div className="ideal_for">
                {
                    dropDownRaw
                        ? <RiArrowDropDownLine className='drop-icon' onClick={() => setDropDownRaw(!dropDownRaw)} />
                        : <RiArrowDropUpLine className='drop-icon' onClick={() => setDropDownRaw(!dropDownRaw)} />
                }
                <p>RAW MATERIALS</p>
                <p className='all'>All</p>
                {
                    dropDownRaw
                        ? (<></>)
                        : (
                            <div className='inside_ideal_for'>
                               <p className='unselect_all' style={{cursor: 'pointer'}}>unselect all</p>
                                <label>
                                    <input type="checkbox" />
                                    <p>Men</p>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <p>Women</p>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <p>Baby & Kids</p>
                                </label>
                            </div>

                        )
                }

            </div>
            <div className="border"></div>

            <div className="ideal_for">
                {
                    dropDownPattern
                        ? <RiArrowDropDownLine className='drop-icon' onClick={() => setDropDownPattern(!dropDownPattern)} />
                        : <RiArrowDropUpLine className='drop-icon' onClick={() => setDropDownPattern(!dropDownPattern)} />
                }
                <p>PATTERN</p>
                <p className='all'>All</p>
                {
                    dropDownPattern
                        ? (<></>)
                        : (
                            <div className='inside_ideal_for'>
                                <p className='unselect_all' style={{cursor: 'pointer'}}>unselect all</p>
                                <label>
                                    <input type="checkbox" />
                                    <p>Men</p>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <p>Women</p>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <p>Baby & Kids</p>
                                </label>
                            </div>

                        )
                }

            </div>
            <div className="border"></div>
        </div>
    )
}

export default Filter
