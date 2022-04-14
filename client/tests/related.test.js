/* eslint-disable react/react-in-jsx-scope */
const React = require('react');
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RelatedItems from '../relatedItems/RelatedItems';

const wrapper = {
   relatedProducts : [
    {
        "status": "fulfilled",
        "value": {
            "id": 64620,
            "campus": "hr-rpp",
            "name": "Camo Onesie",
            "slogan": "Blend in to your crowd",
            "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
            "category": "Jackets",
            "default_price": "140.00",
            "created_at": "2022-01-28T00:20:03.466Z",
            "updated_at": "2022-01-28T00:20:03.466Z",
            "features": [
                {
                    "feature": "Fabric",
                    "value": "Canvas"
                },
                {
                    "feature": "Buttons",
                    "value": "Brass"
                }
            ],
            "styles": {
                "style_id": 398195,
                "name": "Forest Green & Black",
                "original_price": "140.00",
                "sale_price": null,
                "default?": true,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                    }
                ],
                "skus": {
                    "2313078": {
                        "quantity": 8,
                        "size": "XS"
                    },
                    "2313079": {
                        "quantity": 16,
                        "size": "S"
                    },
                    "2313080": {
                        "quantity": 17,
                        "size": "M"
                    },
                    "2313081": {
                        "quantity": 10,
                        "size": "L"
                    },
                    "2313082": {
                        "quantity": 15,
                        "size": "XL"
                    },
                    "2313083": {
                        "quantity": 4,
                        "size": "XL"
                    }
                }
            }
        }
    },
    {
        "status": "fulfilled",
        "value": {
            "id": 64621,
            "campus": "hr-rpp",
            "name": "Bright Future Sunglasses",
            "slogan": "You've got to wear shades",
            "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
            "category": "Accessories",
            "default_price": "69.00",
            "created_at": "2022-01-28T00:20:03.466Z",
            "updated_at": "2022-01-28T00:20:03.466Z",
            "features": [
                {
                    "feature": "Lenses",
                    "value": "Ultrasheen"
                },
                {
                    "feature": "UV Protection",
                    "value": null
                },
                {
                    "feature": "Frames",
                    "value": "LightCompose"
                }
            ],
            "styles": {
                "style_id": 398202,
                "name": "Black Lenses & Gold Frame",
                "original_price": "69.00",
                "sale_price": null,
                "default?": true,
                "photos": [
                    {
                        "thumbnail_url": null,
                        "url": null
                    }
                ],
                "skus": {
                    "null": {
                        "quantity": null,
                        "size": null
                    }
                }
            }
        }
    },
    {
        "status": "fulfilled",
        "value": {
            "id": 64622,
            "campus": "hr-rpp",
            "name": "Morning Joggers",
            "slogan": "Make yourself a morning person",
            "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
            "category": "Pants",
            "default_price": "40.00",
            "created_at": "2022-01-28T00:20:03.466Z",
            "updated_at": "2022-01-28T00:20:03.466Z",
            "features": [
                {
                    "feature": "Fabric",
                    "value": "100% Cotton"
                },
                {
                    "feature": "Cut",
                    "value": "Skinny"
                }
            ],
            "styles": {
                "style_id": 398205,
                "name": "Black",
                "original_price": "40.00",
                "sale_price": null,
                "default?": true,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    }
                ],
                "skus": {
                    "2313114": {
                        "quantity": 8,
                        "size": "XS"
                    },
                    "2313115": {
                        "quantity": 16,
                        "size": "S"
                    },
                    "2313116": {
                        "quantity": 17,
                        "size": "M"
                    },
                    "2313117": {
                        "quantity": 10,
                        "size": "L"
                    },
                    "2313118": {
                        "quantity": 15,
                        "size": "XL"
                    },
                    "2313119": {
                        "quantity": 6,
                        "size": "XXL"
                    }
                }
            }
        }
    },
    {
        "status": "fulfilled",
        "value": {
            "id": 64623,
            "campus": "hr-rpp",
            "name": "Slacker's Slacks",
            "slogan": "Comfortable for everything, or nothing",
            "description": "I'll tell you how great they are after I nap for a bit.",
            "category": "Pants",
            "default_price": "65.00",
            "created_at": "2022-01-28T00:20:03.466Z",
            "updated_at": "2022-01-28T00:20:03.466Z",
            "features": [
                {
                    "feature": "Fabric",
                    "value": "99% Cotton 1% Elastic"
                },
                {
                    "feature": "Cut",
                    "value": "Loose"
                }
            ],
            "styles": {
                "style_id": 398211,
                "name": "Black",
                "original_price": "65.00",
                "sale_price": null,
                "default?": true,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                    }
                ],
                "skus": {
                    "2313150": {
                        "quantity": 8,
                        "size": "XS"
                    },
                    "2313151": {
                        "quantity": 16,
                        "size": "S"
                    },
                    "2313152": {
                        "quantity": 17,
                        "size": "M"
                    },
                    "2313153": {
                        "quantity": 10,
                        "size": "L"
                    },
                    "2313154": {
                        "quantity": 15,
                        "size": "XL"
                    },
                    "2313155": {
                        "quantity": 6,
                        "size": "XXL"
                    }
                }
            }
        }
    },
    {
        "status": "fulfilled",
        "value": {
            "id": 64624,
            "campus": "hr-rpp",
            "name": "Heir Force Ones",
            "slogan": "A sneaker dynasty",
            "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
            "category": "Kicks",
            "default_price": "99.00",
            "created_at": "2022-01-28T00:20:03.466Z",
            "updated_at": "2022-01-28T00:20:03.466Z",
            "features": [
                {
                    "feature": "Sole",
                    "value": "Rubber"
                },
                {
                    "feature": "Material",
                    "value": "FullControlSkin"
                },
                {
                    "feature": "Mid-Sole",
                    "value": "ControlSupport Arch Bridge"
                },
                {
                    "feature": "Stitching",
                    "value": "Double Stitch"
                }
            ],
            "styles": {
                "style_id": 398220,
                "name": "White & White",
                "original_price": "99.00",
                "sale_price": null,
                "default?": true,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    }
                ],
                "skus": {
                    "2313204": {
                        "quantity": 14,
                        "size": "7"
                    },
                    "2313205": {
                        "quantity": 25,
                        "size": "7.5"
                    },
                    "2313206": {
                        "quantity": 9,
                        "size": "8"
                    },
                    "2313207": {
                        "quantity": 2,
                        "size": "8.5"
                    },
                    "2313208": {
                        "quantity": 18,
                        "size": "9"
                    },
                    "2313209": {
                        "quantity": 12,
                        "size": "9.5"
                    },
                    "2313210": {
                        "quantity": 10,
                        "size": "10"
                    },
                    "2313211": {
                        "quantity": 18,
                        "size": "10.5"
                    },
                    "2313212": {
                        "quantity": 11,
                        "size": "11"
                    },
                    "2313213": {
                        "quantity": 35,
                        "size": "11.5"
                    },
                    "2313214": {
                        "quantity": 25,
                        "size": "12"
                    }
                }
            }
        }
    },
    {
        "status": "fulfilled",
        "value": {
            "id": 64625,
            "campus": "hr-rpp",
            "name": "Pumped Up Kicks",
            "slogan": "Faster than a just about anything",
            "description": "The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.",
            "category": "Kicks",
            "default_price": "89.00",
            "created_at": "2022-01-28T00:20:03.466Z",
            "updated_at": "2022-01-28T00:20:03.466Z",
            "features": [
                {
                    "feature": "Sole",
                    "value": "Rubber"
                },
                {
                    "feature": "Material",
                    "value": "FullControlSkin"
                },
                {
                    "feature": "Mid-Sole",
                    "value": "ControlSupport Arch Bridge"
                },
                {
                    "feature": "Stitching",
                    "value": "Double Stitch"
                }
            ],
            "styles": {
                "style_id": 398224,
                "name": "White",
                "original_price": "89.00",
                "sale_price": null,
                "default?": true,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1498168208808-4c2706938a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1498168208808-4c2706938a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2982&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80"
                    },
                    {
                        "thumbnail_url": "uhttps://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1083&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1541444446610-749d3299b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1541444446610-749d3299b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    }
                ],
                "skus": {
                    "2313248": {
                        "quantity": 14,
                        "size": "7"
                    },
                    "2313249": {
                        "quantity": 25,
                        "size": "7.5"
                    },
                    "2313250": {
                        "quantity": 9,
                        "size": "8"
                    },
                    "2313251": {
                        "quantity": 2,
                        "size": "8.5"
                    },
                    "2313252": {
                        "quantity": 18,
                        "size": "9"
                    },
                    "2313253": {
                        "quantity": 12,
                        "size": "9.5"
                    },
                    "2313254": {
                        "quantity": 10,
                        "size": "10"
                    },
                    "2313255": {
                        "quantity": 18,
                        "size": "10.5"
                    },
                    "2313256": {
                        "quantity": 11,
                        "size": "11"
                    },
                    "2313257": {
                        "quantity": 35,
                        "size": "11.5"
                    },
                    "2313258": {
                        "quantity": 25,
                        "size": "12"
                    }
                }
            }
        }
    },
    {
        "status": "fulfilled",
        "value": {
            "id": 64627,
            "campus": "hr-rpp",
            "name": "YEasy 350",
            "slogan": "Just jumped over jumpman",
            "description": "These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.",
            "category": "Kicks",
            "default_price": "450.00",
            "created_at": "2022-01-28T00:20:03.466Z",
            "updated_at": "2022-01-28T00:20:03.466Z",
            "features": [
                {
                    "feature": "Sole",
                    "value": "Rubber"
                },
                {
                    "feature": "Material",
                    "value": "FullControlSkin"
                },
                {
                    "feature": "Stitching",
                    "value": "Double Stitch"
                }
            ],
            "styles": {
                "style_id": 398234,
                "name": "White",
                "original_price": "450.00",
                "sale_price": null,
                "default?": true,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    }
                ],
                "skus": {
                    "2313358": {
                        "quantity": 14,
                        "size": "7"
                    },
                    "2313359": {
                        "quantity": 25,
                        "size": "7.5"
                    },
                    "2313360": {
                        "quantity": 9,
                        "size": "8"
                    },
                    "2313361": {
                        "quantity": 2,
                        "size": "8.5"
                    },
                    "2313362": {
                        "quantity": 18,
                        "size": "9"
                    },
                    "2313363": {
                        "quantity": 12,
                        "size": "9.5"
                    },
                    "2313364": {
                        "quantity": 10,
                        "size": "10"
                    },
                    "2313365": {
                        "quantity": 18,
                        "size": "10.5"
                    },
                    "2313366": {
                        "quantity": 11,
                        "size": "11"
                    },
                    "2313367": {
                        "quantity": 35,
                        "size": "11.5"
                    },
                    "2313368": {
                        "quantity": 25,
                        "size": "12"
                    }
                }
            }
        }
    }
]

}
test('renders learn react link', async () => {
  render(<RelatedItems relatedArr ={wrapper.relatedProducts} currentProd={wrapper.currentProd}/>);
  const output = screen.getByText(/YOUR OUTFIT/i);
  expect(output).toBeInTheDocument();
});

