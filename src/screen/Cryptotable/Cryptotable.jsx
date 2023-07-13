import React from 'react'
import CardCoin from '../../components/CardCoin/CardCoin'
import HeadingCaption from '../../components/HeadingCaption/HeadingCaption'
import Table from 'react-bootstrap/Table';
import "./Cryptotable.css"


const Cryptotable = () => {
    return (
        <div className='p-4  w-100 '>
            <div>
                <Table className='table-black  table-dark TextSize' responsive="xl"   >
                    <thead >
                        <tr >
                            <th className='fw-light'></th>
                            <th className='fw-light'>#</th>
                            <th className='fw-light'>Name</th>
                            <th className='fw-light'>Price</th>
                            <th className='fw-light'>24hr %</th>
                            <th className='fw-light'>7D %</th>
                            <th className='fw-light'>Market Cap</th>
                            <th className='fw-light'>Volume(24h)</th>
                            <th className='fw-light'>Circulating Supply</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>
                        <tr>

                            <td> <i class="fa-regular fa-star"/></td>
                            <td> 1</td>
                            <td className='fw-light '>
                                <div className='d-flex align-items-center '>
                                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="25px" className="me-3 " alt="coin" />
                                    <HeadingCaption
                                        heading="Bitcoin"
                                        caption="BTC"
                                        textColor="#999999"
                                        fontSize="10px"
                                        fontHSize="12px"
                                    />
                                </div>
                            </td>
                            <td className='fw-light TextSize'>$50,335.21</td>
                            <td className='fw-light TextSize '>
                                <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>6.49%</span>
                            </td>
                            <td className=' TextSize fw-light TextSize '> <i class="fa-solid fa-chevron-up  text-success me-1" />
                                <span className=' text-success'>22.49%</span></td>
                            <td className='fw-light TextSize '> $7666,432,562,346</td>
                            <td className='fw-light TextSize '>$38,544,965,954</td>
                            <td className='fw-light TextSize '>18,434,356 BTC</td>
                        </tr>

                    </tbody>
                </Table>





            </div>



        </div>
    )
}

export default Cryptotable