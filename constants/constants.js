export const API_SAMPLES = {
    TRADE_PARTNER: {
        request: `{
    "filters": {
        "countryName": "United States",
        "hsCode": "8708",
        "year": "2023"
    },
    "page": 1,
    "limit": 10
}`,
        response: `{
    "status": "success",
    "data": {
        "tradePartners": [
            {
                "partnerName": "Mexico",
                "totalValue": 45000000,
                "tradeShare": 25.5,
                "tradeVolume": 12000,
                "tradeType": "Import"
            }
        ],
        "totalRecords": 150,
        "page": 1,
        "limit": 10
    }
}`
    },
    TREND_BY: {
        request: `{
    "filters": {
        "hsCode": "8708",
        "startDate": "2023-01",
        "endDate": "2023-12",
        "reportingCountry": "United States"
    }
}`,
        response: `{
    "status": "success",
    "data": {
        "trends": [
            {
                "period": "2023-01",
                "value": 12500000,
                "volume": 3500,
                "growth": 5.2
            }
        ],
        "totalRecords": 12
    }
}`
    },
    TOTAL_BY: {
        request: `{
    "filters": {
        "hsCode": "8708",
        "year": "2023",
        "groupBy": "country"
    }
}`,
        response: `{
    "status": "success",
    "data": {
        "totals": [
            {
                "country": "Mexico",
                "totalValue": 85000000,
                "share": 18.5
            }
        ]
    }
}`
    },
    IMPORTER_EXPORTER: {
        request: `{
    "filters": {
        "hsCode": "8708",
        "country": "United States",
        "type": "importer"
    }
}`,
        response: `{
    "status": "success",
    "data": {
        "companies": [
            {
                "name": "ABC Auto Parts Inc",
                "totalValue": 25000000,
                "marketShare": 8.5,
                "tradeVolume": 7500
            }
        ]
    }
}`
    },
    COMPANY_LOOKUP: {
        request: `{
    "companyName": "Tesla Inc",
    "country": "United States",
    "matchType": "exact"
}`,
        response: `{
    "status": "success",
    "data": {
        "companies": [
            {
                "id": "TSL001",
                "name": "Tesla Inc",
                "country": "United States",
                "matchScore": 100
            }
        ]
    }
}`
    },
    COMPANY_PROFILE: {
        request: `{
    "companyId": "TSL001",
    "year": "2023"
}`,
        response: `{
    "status": "success",
    "data": {
        "companyInfo": {
            "name": "Tesla Inc",
            "country": "United States",
            "totalTradeValue": 150000000,
            "topProducts": [
                {
                    "hsCode": "8703",
                    "description": "Electric Vehicles",
                    "value": 75000000
                }
            ]
        }
    }
}`
    },
    TRADE_PARTNERS: {
        request: `{
    "companyId": "TSL001",
    "year": "2023",
    "type": "supplier"
}`,
        response: `{
    "status": "success",
    "data": {
        "partners": [
            {
                "name": "LG Energy Solution",
                "country": "South Korea",
                "tradeValue": 35000000,
                "relationship": "supplier"
            }
        ]
    }
}`
    },
    HS_CODE: {
        request: `{
    "productName": "Electric Vehicle Battery",
    "country": "United States",
    "language": "en"
}`,
        response: `{
    "status": "success",
    "data": {
        "hsCodes": [
            {
                "code": "850760",
                "description": "Lithium-ion accumulators",
                "globalWeightage": 85.5,
                "countryWeightage": 92.3
            }
        ]
    }
}`
    }
};

export const TABS_CONFIG = [
    {
        key: 'globalTrade',
        title: 'GLOBAL TRADE DATA API',
        description: 'Access shipment records based on custom parameters such as HS Code, Product Description, Importer Name, Exporter Name, Origin Country, Destination Country, Port, and Transport Mode.',
        requestSnippet: API_SAMPLES.TRADE_PARTNER.request,
        responseSnippet: API_SAMPLES.TRADE_PARTNER.response
    },
    {
        key: 'trendBy',
        title: 'TREND BY AND TOTAL BY API',
        description: 'Get duration-based import and export data and access total values of traded commodities, countries, companies, and other market components.',
        requestSnippet: API_SAMPLES.TREND_BY.request,
        responseSnippet: API_SAMPLES.TREND_BY.response,
        totalByRequest: API_SAMPLES.TOTAL_BY.request,
        totalByResponse: API_SAMPLES.TOTAL_BY.response
    },
    {
        key: 'importerExporter',
        title: 'IMPORTER AND EXPORTER SEARCH API',
        description: 'Find global importers and exporters list and select those that match to your requirements based on HS Codes, Products, Trade Countries, and more.',
        requestSnippet: API_SAMPLES.IMPORTER_EXPORTER.request,
        responseSnippet: API_SAMPLES.IMPORTER_EXPORTER.response
    },
    {
        key: 'companyLookup',
        title: 'COMPANY LOOKUP API',
        description: 'Find and match companies with their unique IDs based on names. Integrate with Company Profile API for detailed information.',
        requestSnippet: API_SAMPLES.COMPANY_LOOKUP.request,
        responseSnippet: API_SAMPLES.COMPANY_LOOKUP.response
    },
    {
        key: 'companyProfile',
        title: 'COMPANY PROFILE API',
        description: 'Access detailed company overview including import & export turnover, top commodities, trade partners, and more.',
        requestSnippet: API_SAMPLES.COMPANY_PROFILE.request,
        responseSnippet: API_SAMPLES.COMPANY_PROFILE.response
    },
    {
        key: 'tradePartners',
        title: 'TRADE PARTNERS API',
        description: 'Find buyers or suppliers of a particular company, and their import or export partners with supply chain intelligence.',
        requestSnippet: API_SAMPLES.TRADE_PARTNERS.request,
        responseSnippet: API_SAMPLES.TRADE_PARTNERS.response
    },
    {
        key: 'hsCode',
        title: 'HS CODE SEARCH API',
        description: 'Obtain accurate Harmonized System (HS) codes and descriptions in multiple languages based on product names and country specifications.',
        requestSnippet: API_SAMPLES.HS_CODE.request,
        responseSnippet: API_SAMPLES.HS_CODE.response
    }
];