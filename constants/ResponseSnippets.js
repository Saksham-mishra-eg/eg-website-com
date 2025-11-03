export const  TrendByReqSnippet = `
{
    "date_range": [
    "2023-01-01",
    "2023-12-31"
    ],
    "country": "Sri Lanka",
    "direction": "import"
    },
    "paging": {
    "count": 10,
    "page": 1
    },
    "group_by_column": "Supplier",
    "sum_on": "Total_Value_USD",
    "filter": {
    "must": [
    {
        "key": "Product_Description",
        "value": "coal"
    }
    ]
}
`
;

export const  TrendByRespnSnippet = `
{
"log_id": "vBPYrI0B3frX5a",
"paging": {
    "count": 10,
    "page": 1,
    "total": 55
},
"result": [
    {
        "key": "GURON TRADING LTD",
        "sum": 117917877,
        "count": 11,
        "trends": [
            {
                "title": "March 2023",
                "count": 5,
                "sum": 69578200
            },
            {
                "title": "August 2023",
                "count": 4,
                "sum": 32991139.5
            },
            {
                "title": "September 2023",
                "count": 2,
                "sum": 15348537.5
            }
            
        ]
    },
    {
        "key": "ANGLO AMERICAN MARKETING LTD",
        "sum": 115742547,
        "count": 10,
        "trends": [
            {
                "title": "December 2022",
                "count": 3,
                "sum": 39875133
            },
            {
                "title": "January 2023",
                "count": 3,
                "sum": 38043187
            },
            {
                "title": "March 2023",
                "count": 1,
                "sum": 9228125
            }
        ]
    },
    {
        "key": "BLACK SAND COMMODITIES FZ-LLC",
        "sum": 69151519.5,
        "count": 7,
        "trends": [
            {
                "title": "November 2023",
                "count": 5,
                "sum": 36725283.5
            },
            {
                "title": "December 2022",
                "count": 2,
                "sum": 32426236
            }
        ]
    },
    {
        "key": "KRU OVERSEAS DMCC",
        "sum": 30131320.5,
        "count": 3,
        "trends": [
            {
                "title": "September 2023",
                "count": 2,
                "sum": 15286840.5
            },
            {
                "title": "March 2023",
                "count": 1,
                "sum": 14844480
            }
        ]
    },
    {
        "key": "BLACK SAND COMMODITIES FZ LLC",
        "sum": 15930710,
        "count": 2,
        "trends": [
            {
                "title": "October 2023",
                "count": 2,
                "sum": 15930710
            }
        ]
    },
    {
        "key": "GURON TRADING LIMITED",
        "sum": 14641680,
        "count": 1,
        "trends": [
            {
                "title": "April 2023",
                "count": 1,
                "sum": 14641680
            }
        ]
    },
    {
        "key": "PRAKTIKA ENERGY RESOURCES TRADING FZCO ON",
        "sum": 14246697,
        "count": 1,
        "trends": [
            {
                "title": "February 2023",
                "count": 1,
                "sum": 14246697
            }
        ]
    },
    {
        "key": "EXXARO COAL (PTY) LTD",
        "sum": 12779519,
        "count": 1,
        "trends": [
            {
                "title": "January 2023",
                "count": 1,
                "sum": 12779519
            }
        ]
    },
    {
        "key": "NG GLOBAL ENERGY SOLUTIONS (PTY) LTD",
        "sum": 11805288,
        "count": 1,
        "trends": [
            {
                "title": "December 2022",
                "count": 1,
                "sum": 11805288
            }
        ]
    },
    {
        "key": "ANGLO OPERATIONS PRORIETARY LTD",
        "sum": 11011911,
        "count": 1,
        "trends": [
            {
                "title": "February 2023",
                "count": 1,
                "sum": 11011911
            }
        ]
    }
]
}
`
;


export const  TradePartnerReqSnippet = `
  
{
"date_range": [
    "2022-01-01",
    "2023-12-30"
    ],
    "country": "Bangladesh",
    "direction": "export"
    },
    "paging": {
        "count": 10,
        "page": 1
    },
    "filter": {
    "must": [
      {
        "key": "Product_Description",
        "value": "wheat"
      }
    ]
  }
    
    
`;

export const  TradePartnerReswSnippet = `
    {
        "log_id": "INBFrc9V7e",
        "paging": {
            "count": 10,
            "page": 1,
            "total": 290
    },
     "result": [
    {
        "id": "BD_1_9855140",
        "date": "2022-08-24",
        "assesment_date": "23-AUG-22",
        "be_date": "23-AUG-22",
        "hs_code": "23024010",
        "sub_heading": "230240",
        "heading": "2302",
        "chapter": "23",
        "product_description": "Brans,Sharps & Oth. Residues Of Oth. Cereals Except Maize,Rice & Wheat RICE BRAN RAW ORYZA SATIVA",
        "buyer": "SUBRATA MUKHERJEE",
        "buyer_address": "M/S.R.M.ENTERPRISE WAZIDNAGAR,P.O-SAHAGANJ HOOGLY,W.B.712104 INDIA.",
        "exporter": "H K ENTERPRISE",
        "exporter_address": "PLOT-2, POLICE PLAZA CONCORDLEVEL-4, SHOP461, ROAD-144GULSHAN-1, Dhaka, 1212, Bangl",
        "destination_country": "China",
        "origin_country": "Bangladesh",
        "export_country": "Bangladesh",
        "net_weight_kg": 96000,
        "gross_weight_kg": 99000,
        "total_no_of_packages": "1980",
        "declared_unit_price_fc": 0.19,
        "assessable_unit_price_fc": 0.19,
        "item": "1",
        "no_of_packages": "1980",
        "total_value_bdt": 1703616,
        "total_value_usd": 17993.73,
        "mode_of_transport": "Road",
        "port_of_loading": "Jessore",
        "delivery_terms": "CFR",
        "total_invoice_value_fc": 18240,
        "currency": "USD",
        "item_price_fc": 18240,
        "package_unit": "Bag",
        "name_carrier_nationality": "TRUCK  BD"
        }
    ]
}
    `;

export const  TotalBYReqSnippet = `

{
    "date_range": [
      "2023-01-01",
      "2023-12-31"
    ],
    "country": "Mexico",
    "direction": "import"
  },
  "paging": {
    "count": 10,
    "page": 1
  },
  "group_by_column": "Origin_Country",
  "sum_on": "Total_Value_USD",
  "filter": {
    "must": [
      {
        "key": "Product_Description",
        "value": "corn"
      }
    ]
}
`
;

export const  TotalBYRespnSnippet = `

{
    "log_id": "v3bghI0BCs2A1w",
    "paging": {
        "count": 10,
        "page": 1,
        "total": 76
    },
    "result": [
        {
            "key": "United States of America",
            "sum": 5517810072.46,
            "count": 32775
        },
        {
            "key": "Mexico",
            "sum": 503634445.96,
            "count": 9703
        },
        {
            "key": "Brazil",
            "sum": 433272027.17,
            "count": 501
        },
        {
            "key": "South Africa",
            "sum": 86728336.95,
            "count": 30
        },
        {
            "key": "China",
            "sum": 25045324.47,
            "count": 5075
        },
        {
            "key": "South Korea",
            "sum": 10500866.42,
            "count": 433
        },
        {
            "key": "Chile",
            "sum": 8394719.19,
            "count": 200
        },
        {
            "key": "Argentina",
            "sum": 8076531.17,
            "count": 38
        },
        {
            "key": "Canada",
            "sum": 7056271.46,
            "count": 309
        }
    ]
}
`
;

export const  ImpExpSrchrReqSnippet = `
  {
    "date_range": [
      "2023-01-01",
      "2023-12-31"
    ],
    "country": "Turkiye",
    "direction": "import"
  },
  "paging": {
    "count": 10,
    "page": 1
  },
  "group_by_column": "Importer",
  "sum_on": "Total_Value_USD",
  "filter": {
    "must": [
      {
        "key": "Product_Description",
        "value": "coal"
      }
    ]
  }
    `;

export const  ImpExpSrchrRespnSnippet = `
  {
    "log_id": "rU3b0wxix90mh",
    "paging": {
        "count": 10,
        "page": 1,
        "total": 782
    },
    "result": [
        {
            "key": "EREN ENERJI ELEKTRIKURETIM ANONIM SIRKETI",
            "sum": 714781110.93,
            "count": 83
        },
        {
            "key": "ISKENDERUN DEMIR VE CELIK ANONIM SIRKETI",
            "sum": 714441867.90,
            "count": 81
        },
        {
            "key": "KARDEMIR KARABUK DEMIR CELIK SANAYIIVE TICARET ANONIM SIRKETI",
            "sum": 431812214.65,
            "count": 77
        },
        {
            "key": "A S EMBA ELEKTRIK URETIM",
            "sum": 427025972.87,
            "count": 65
        },
        {
            "key": "ISKENDERUN ENERJI URETIM VE TICARET ANONIM SIRKETI",
            "sum": 426212392.62,
            "count": 33
        },
        {
            "key": "ICDAS ELEKTRIK ENERJISI URETIM VE YATIRIM ANONIM S",
            "sum": 383983823.92,
            "count": 40
        },
        {
            "key": "ATLAS ENERJI URETIM ANONIM SIRKETI",
            "sum": 329970979.84,
            "count": 67
        },
        {
            "key": "CENAL ELEKTRIK URETIM ANONIM SIRKETI",
            "sum": 319444511.05,
            "count": 32
        },
        {
            "key": "EREGLI DEMIR VECELIK FAB T ANONIM SIRKETI",
            "sum": 263334423.32,
            "count": 26
        },
        {
            "key": "SUPER ENERJI MADENCILIK INSAAT SANAYI VE TICARET ANONIM SIRKETI",
            "sum": 204946527.81,
            "count": 112
        }
    ]
}
    `;


export const  CompnyLookUPReqSnippet = `
{
   "company_name": "samsung"
},
   "filter" : {
     "direction": "export",
     "country":"Russia",
     "result_count": 20
   }
    `;


export const  CompnyLookUPRespnSnippet = `
{
    "log_id": "kMYnjugsJ2e",
    "total": 11,
    "result": [
        {
		"company_name": "SAMSUNG ELECTRONICS RUS COMPANY LLC",
		"address_details": "123242,, MOSCOW, NOVINSKY BOULEVARD, D. 31, ROOM 1,2,", 
		"country": "Russia",
		"directions": [
			"export"
		]
        },
        {
		"company_name": "SAMSUNG SDS RUS LLC",
		"address_details": "141825, MO, DMITROV R-N, G.P. DMITROV, TER.4-Y KM, AUT., DMITROV-ORUDYEVO-BEETLE",
		"country": "Russia",
		"directions": [
			"export"
		]
        },
        {
		"company_name": "SAMSUNG C AND T CORPORATION",
		"address_details": ", , SEOUL, SONGPA, 23, OLYMPIC ROAD, 35 GIL,",
		"country": "Russia",
		"directions": [
			"export"
		]
        },
        {
		"company_name": "SAMSUNG C & T CORPORATION RUS LLC",
		"address_details": "123610,, MOSCOW, KRASNOPRESNENSKAYA EMB., 12, ENTRANCE No. 6, OF.1127",
		"country": "Russia",
		"directions": [
			"export"
		]
        },
        {
		"company_name": "SAMSUNG C AND CORPORATION",
		"address_details": "05510, SEOUL, SONGPA-GU, 123, OLYMPIC-RO 35 GIL,",
		"country": "Russia",
		"directions": [
			"export"
		]
        }
    ]
}
    `;


export const  CompnyPrfAPiReqSnippet = `
{
    "company_name": "meghna petroleum limited",
    "date_range":  [ "2022-12-01", "2023-11-30" ],
    "country": "Bangladesh",
    "direction": "import"
},
"filter": {
    "top_result_count": 10
}
    `;


export const  CompnyPrfAPiRespnSnippet = `
{
"log_id": "E4dricjs7v",
"total": 10,
"result": {
	"top_supplier_by_value": [
	{
		"supplier": "UNIPEC SINGAPORE PVT LIMITED",
		"value": "616678418.75"
	},
	{
		"supplier": "BUMI SEAK PUSKO",
		"value": "31922315.75"
	}
],
	"top_origin_country": [
	{
		"Country": "Singapore",
		"value": "736766841.53"
	},
	{
		"Country": "Thailand",
		"value": "3917362.75"
	}
],
	"top_hscodes_by_value": [
	{
		"hscode": "27101262",
		"value": "1846699893.31"
	},
	{
		"hscode": "38200000",
		"value": "22898.06"
	}
],
	"top_port_of_unloading_by_value": [
	{
		"Port": "Chittagong",
		"value": "1872988187.06"
	},
	{
		"Port": "Biral LC Station",
		"value": "6730707.88"
      }
    ]	
   }
}
    `;


export const  TrdPrnerAPiReqSnippet = `
{
    {
   "company_name": "KUPISHUZ LLC",
   "target": "suppliers",
   "country": "Russia"
  },
  "paging": {
   "count": 10,
   "page": 1
  },
  "filter": {
      "target_size": 10
  }
}
`;


export const  TrdPrnerAPiRespnSnippet = `
{
    "log_id": "N2i4dPYrItgc",
    "paging": {
        "count": 10,
        "page": 1,
        "total": 10
    },
    "result": [
        {
            "company_name": "BLANKO 20 GMBH & CO.KG, THROUGH A REPRESENTATIVE IN POLAND",
            "company_address": "10969,, BERLIN, CHARLOTTENSTRASSE 4",
            "hs_code": "6108310000",
            "country": "Russia"
        },
        {
            "company_name": "RGW EXPRESS SP. Z OO VIA BLANKO 20 GMBH & CO.KG",
            "company_address": "10969, BERLIN, CHARLOTTENSTRASSE, 4",
            "hs_code": "6112411000",
            "country": "Russia"
        },
        {
            "company_name": "RGW EXPRESS SP. Z OO VIA BLANKO 20 GMBH & CO.KG",
            "company_address": "10969, , BERLIN, CHARLOTTENSTRASSE, 4,",
            "hs_code": "6403999800",
            "country": "Russia"
        }
    ]
}
`;


export const  HsCodeAPiReqSnippet = `
{
  "hsCodeApiSettings": {
    "product_description": "Palm oil"
  },
  "paging": {
    "count": 12,
    "page": 1
  },
   "filter" : {
     "top_hscodes_count": 10,
     "date_range": [ "2023-01-01", "2023-12-31" ],
     "languages":["english","japanese","turkish","chinese","arabic"],
     "country":["Vietnam","Sri Lanka"]
   }
}
`;


export const  HsCodeAPiRespnSnippet = `
{
    "log_id": "BCwxjnes2Zylp",
    "paging": {
        "count": 12,
        "page": 1,
        "total": 70
    },
    "global_hs_code": {
        "value": "15119020",
        "description": {
            "hs_code_description_chinese": "棕榈硬脂：棕榈油及其馏分，无论是否精炼，但未经化学改性。",
            "hs_code_description_arabic": "استيارين النخيل: زيت النخيل وجزيئاته، وإن كان مكرراً ولكن غير معدل كيميائياً.",
            "hs_code_description_english": "Palm Stearin : Palm Oil And Its Fractions, Whether Or Not Refined, But Not Chemically Modified.",
            "hs_code_description_japanese": "パームステアリン：パーム油とその留分（精製か未精製かにかかわらず、化学的に修飾されていないもの）。",
            "hs_code_description_turkish": "Palm Stearin: Palmiye Yağı ve Fraksiyonları (Rafine Edilmiş Olsun Olsun, Ancak Kimyasal Olarak Değiştirilmemiş)."
        },
        "average_percentage": "8.87",
        "country_with_hscode": {
            "VN": 5.09,
            "LK": 1.52
        }
    },
    "country_wise_hsCode": [
            "country": "Vietnam",
            "count": 10576,
            "Top_hs_Codes": [
                {
                    "hs_code": "15179063",
                    "percentage": "42.56",
                    "count": 4501,
                    "descriptions": {
                        "hs_code_description_english": "Packaged with a net weight not exceeding 25kg",
                        "hs_code_description_japanese": "正味重量が25kgを超えないように梱包します。",
                        "hs_code_description_turkish": "Net ağırlığı 25 kg'ı geçmeyecek şekilde paketlenmiştir",
                        "hs_code_description_chinese": "包装净重不超过25kg",
                        "hs_code_description_arabic": "معبأة بوزن صافي لا يتجاوز 25 كجم"
                    }
                },
               
                {
                    "hs_code": "23066090",
                    "percentage": "2.21",
                    "count": 234,
                    "descriptions": {
                        "hs_code_description_english": "Packaged with a net weight not exceeding 25kg",
                        "hs_code_description_japanese": "正味重量が25kgを超えないように梱包します。",
                        "hs_code_description_turkish": "Net ağırlığı 25 kg'ı geçmeyecek şekilde paketlenmiştir",
                        "hs_code_description_chinese": "包装净重不超过25kg",
                        "hs_code_description_arabic": "معبأة بوزن صافي لا يتجاوز 25 كجم"
                    }
                },
                {
                    "hs_code": "15179043",
                    "percentage": "1.61",
                    "count": 170,
                    "descriptions": {
                        "hs_code_description_english": "Packaged with a net weight not exceeding 25kg",
                        "hs_code_description_japanese": "正味重量が25kgを超えないように梱包します。",
                        "hs_code_description_turkish": "Net ağırlığı 25 kg'ı geçmeyecek şekilde paketlenmiştir",
                        "hs_code_description_chinese": "包装净重不超过25kg",
                        "hs_code_description_arabic": "معبأة بوزن صافي لا يتجاوز 25 كجم"
                    }
                },
                {
                    "hs_code": "15119039",
                    "percentage": "1.13",
                    "count": 119,
                    "descriptions": {
                        "hs_code_description_english": "Packaged with a net weight not exceeding 25kg",
                        "hs_code_description_japanese": "正味重量が25kgを超えないように梱包します。",
                        "hs_code_description_turkish": "Net ağırlığı 25 kg'ı geçmeyecek şekilde paketlenmiştir",
                        "hs_code_description_chinese": "包装净重不超过25kg",
                        "hs_code_description_arabic": "معبأة بوزن صافي لا يتجاوز 25 كجم"
                    }
                }
            ]
        },
        {
            "country": "Sri Lanka",
            "count": 66,
            "Top_hs_Codes": [
                {
                    "hs_code": "38231920",
                    "percentage": "39.39",
                    "count": 26,
                    "descriptions": {
                        "hs_code_description_english": "Other : Margarine; Edible Mixtures Or Preparations Of Animal Or Vegetable Fats Or Oils Or Of Fractions Of Different Fats Or Oils Of This Chapter , Other Than Edible Fats Or Oils Or Their Fractions Of Heading 15.16",
                        "hs_code_description_japanese": "その他 : マーガリン;第 15.16 項の食用油脂又はその分画を除く、本章の動物若しくは植物性油脂又は異なる油脂の分画の食用混合物又は調製物",
                        "hs_code_description_turkish": "Diğer : Margarin; Yenilebilir katı veya sıvı yağlar veya bunların 15.16 pozisyonundaki fraksiyonları hariç, bu fasılda yer alan hayvansal veya bitkisel katı veya sıvı yağların veya farklı katı veya sıvı yağların fraksiyonlarının yenilebilir karışımları veya müstahzarları",
                        "hs_code_description_chinese": "其他：人造黄油；本章所列动植物油脂或不同油脂的分离品的可食用混合物或制品，但品目15.16的食用油脂或其分离品除外",
                        "hs_code_description_arabic": "أخرى: السمن؛ مخاليط أو محضرات صالحة للأكل من دهون أو زيوت حيوانية أو نباتية أو من جزيئات الدهون أو الزيوت المختلفة الداخلة في هذا الفصل، عدا الدهون أو الزيوت الصالحة للأكل أو جزيئاتها الداخلة في البند 15.16"
                    }
                },
                {
                    "hs_code": "15179000",
                    "percentage": "15.15",
                    "count": 10,
                    "descriptions": {
                        "hs_code_description_english": "Other : Margarine; Edible Mixtures Or Preparations Of Animal Or Vegetable Fats Or Oils Or Of Fractions Of Different Fats Or Oils Of This Chapter , Other Than Edible Fats Or Oils Or Their Fractions Of Heading 15.16",
                        "hs_code_description_japanese": "その他 : マーガリン;第 15.16 項の食用油脂又はその分画を除く、本章の動物若しくは植物性油脂又は異なる油脂の分画の食用混合物又は調製物",
                        "hs_code_description_turkish": "Diğer : Margarin; Yenilebilir katı veya sıvı yağlar veya bunların 15.16 pozisyonundaki fraksiyonları hariç, bu fasılda yer alan hayvansal veya bitkisel katı veya sıvı yağların veya farklı katı veya sıvı yağların fraksiyonlarının yenilebilir karışımları veya müstahzarları",
                        "hs_code_description_chinese": "其他：人造黄油；本章所列动植物油脂或不同油脂的分离品的可食用混合物或制品，但品目15.16的食用油脂或其分离品除外",
                        "hs_code_description_arabic": "أخرى: السمن؛ مخاليط أو محضرات صالحة للأكل من دهون أو زيوت حيوانية أو نباتية أو من جزيئات الدهون أو الزيوت المختلفة الداخلة في هذا الفصل، عدا الدهون أو الزيوت الصالحة للأكل أو جزيئاتها الداخلة في البند 15.16"
                    }
                },
                {
                    "hs_code": "84834000",
                    "percentage": "3.03",
                    "count": 2,
                    "descriptions": {
                        "hs_code_description_english": "Other : Margarine; Edible Mixtures Or Preparations Of Animal Or Vegetable Fats Or Oils Or Of Fractions Of Different Fats Or Oils Of This Chapter , Other Than Edible Fats Or Oils Or Their Fractions Of Heading 15.16",
                        "hs_code_description_japanese": "その他 : マーガリン;第 15.16 項の食用油脂又はその分画を除く、本章の動物若しくは植物性油脂又は異なる油脂の分画の食用混合物又は調製物",
                        "hs_code_description_turkish": "Diğer : Margarin; Yenilebilir katı veya sıvı yağlar veya bunların 15.16 pozisyonundaki fraksiyonları hariç, bu fasılda yer alan hayvansal veya bitkisel katı veya sıvı yağların veya farklı katı veya sıvı yağların fraksiyonlarının yenilebilir karışımları veya müstahzarları",
                        "hs_code_description_chinese": "其他：人造黄油；本章所列动植物油脂或不同油脂的分离品的可食用混合物或制品，但品目15.16的食用油脂或其分离品除外",
                        "hs_code_description_arabic": "أخرى: السمن؛ مخاليط أو محضرات صالحة للأكل من دهون أو زيوت حيوانية أو نباتية أو من جزيئات الدهون أو الزيوت المختلفة الداخلة في هذا الفصل، عدا الدهون أو الزيوت الصالحة للأكل أو جزيئاتها الداخلة في البند 15.16"
                    }
                },
                {
                    "hs_code": "15111000",
                    "percentage": "1.52",
                    "count": 1,
                    "descriptions": {
                        "hs_code_description_english": "Other : Margarine; Edible Mixtures Or Preparations Of Animal Or Vegetable Fats Or Oils Or Of Fractions Of Different Fats Or Oils Of This Chapter , Other Than Edible Fats Or Oils Or Their Fractions Of Heading 15.16",
                        "hs_code_description_japanese": "その他 : マーガリン;第 15.16 項の食用油脂又はその分画を除く、本章の動物若しくは植物性油脂又は異なる油脂の分画の食用混合物又は調製物",
                        "hs_code_description_turkish": "Diğer : Margarin; Yenilebilir katı veya sıvı yağlar veya bunların 15.16 pozisyonundaki fraksiyonları hariç, bu fasılda yer alan hayvansal veya bitkisel katı veya sıvı yağların veya farklı katı veya sıvı yağların fraksiyonlarının yenilebilir karışımları veya müstahzarları",
                        "hs_code_description_chinese": "其他：人造黄油；本章所列动植物油脂或不同油脂的分离品的可食用混合物或制品，但品目15.16的食用油脂或其分离品除外",
                        "hs_code_description_arabic": "أخرى: السمن؛ مخاليط أو محضرات صالحة للأكل من دهون أو زيوت حيوانية أو نباتية أو من جزيئات الدهون أو الزيوت المختلفة الداخلة في هذا الفصل، عدا الدهون أو الزيوت الصالحة للأكل أو جزيئاتها الداخلة في البند 15.16"
                    }
                },
                {
                    "hs_code": "15119020",
                    "percentage": "1.52",
                    "count": 1,
                    "descriptions": {
                        "hs_code_description_english": "Other : Margarine; Edible Mixtures Or Preparations Of Animal Or Vegetable Fats Or Oils Or Of Fractions Of Different Fats Or Oils Of This Chapter , Other Than Edible Fats Or Oils Or Their Fractions Of Heading 15.16",
                        "hs_code_description_japanese": "その他 : マーガリン;第 15.16 項の食用油脂又はその分画を除く、本章の動物若しくは植物性油脂又は異なる油脂の分画の食用混合物又は調製物",
                        "hs_code_description_turkish": "Diğer : Margarin; Yenilebilir katı veya sıvı yağlar veya bunların 15.16 pozisyonundaki fraksiyonları hariç, bu fasılda yer alan hayvansal veya bitkisel katı veya sıvı yağların veya farklı katı veya sıvı yağların fraksiyonlarının yenilebilir karışımları veya müstahzarları",
                        "hs_code_description_chinese": "其他：人造黄油；本章所列动植物油脂或不同油脂的分离品的可食用混合物或制品，但品目15.16的食用油脂或其分离品除外",
                        "hs_code_description_arabic": "أخرى: السمن؛ مخاليط أو محضرات صالحة للأكل من دهون أو زيوت حيوانية أو نباتية أو من جزيئات الدهون أو الزيوت المختلفة الداخلة في هذا الفصل، عدا الدهون أو الزيوت الصالحة للأكل أو جزيئاتها الداخلة في البند 15.16"
                    }
                }
            ]
        }
`;