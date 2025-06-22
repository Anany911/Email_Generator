let preloadedData = {};

function preloadData() {
    const issues = [
        "pre-delivery", "dnr", "item-missing", "empty-box", "part-missing",
        "wrong-item", "return", "any-carrier", "mdr", "refund", "ofm", "others", "damaged-defective"
    ];

    const langs = ["en", "ar"];
    const countries = ["EG", "SA", "AE"];

    issues.forEach(issue => {
        langs.forEach(lang => {
            countries.forEach(country => {
                fetchData(lang, country, issue);
            });
        });
    });
}

function fetchData(lang, country, issue) {
    const options = getOptions(issue);
    options.forEach(option => {
        const filePath = `${lang}/${country}/${issue}/${option[1]}.txt`;
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                if (!preloadedData[lang]) preloadedData[lang] = {};
                if (!preloadedData[lang][country]) preloadedData[lang][country] = {};
                if (!preloadedData[lang][country][issue]) preloadedData[lang][country][issue] = {};
                preloadedData[lang][country][issue][option[1]] = {
                    text: data,
                    links: getIssueLinks(lang, country, issue, option[1])
                };
            })
            .catch(error => console.error('Error preloading text file:', error));
    });
}


function getIssueLinks(lang, country, issue, option) {
    const links = {

"en": {
    "EG": {
                "pre-delivery": {
                    "pre-delivery-EDD Not Passed": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "pre-delivery-EDD-Passed": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_pre-delivery_edd_passed&contentId=TzZHjxbDTmGDy6Y5yB&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "pre-delivery-RTO arrive to FC": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "pre-delivery-RTO (IR Requesting)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "pre-delivery-Invalid IR (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "pre-delivery-Invalid IR (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "pre-delivery-Invalid IR (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "pre-delivery-Invalid IR (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "pre-delivery-Deny Concession": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_delivery_window_passed&contentId=Tr5pvOoyVcYrRyRdef&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                },
 
                "dnr": {
                    "dnr-FRD Not Passed": "https://cs-assistant-eu.amazon.com/home/fetch?query=DNR+wait+FRD&contentId=Tmiqa1xFdFDrlFD7Bx&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "dnr-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_DNR_investigation_ongoing&contentId=Tm8VFPfek4dIlm0lJr&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "dnr-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "dnr-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit&contentId=TwoVjkWevonOKeMMZu&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "dnr-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_incorrect&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "dnr-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_incorrect&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "dnr-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_incorrect&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "dnr-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_incorrect&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "dnr-Deny(OTP)": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=T82tdLg9OL5GbWvcWr&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "dnr-Deny(COD)": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=T82tdLg9OL5GbWvcWr&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    },

                "item-missing": {
                    "item-missing-ARI-Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_DNR_investigation_ongoing&contentId=Tm8VFPfek4dIlm0lJr&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "item-missing-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "item-missing-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit&contentId=TwoVjkWevonOKeMMZu&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "item-missing-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_incorrect&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "item-missing-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_incorrect&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "item-missing-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_incorrect&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "item-missing-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_incorrect&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    // "item-missing-Deny Concession": "https://example.com/en/sa/pre-delivery-Passed",
                    // "item-missing-concession-tamper proof": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "empty-box": {
                    "empty-box-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_DNR_investigation_ongoing&contentId=Tm8VFPfek4dIlm0lJr&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "empty-box-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "empty-box-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit&contentId=TwoVjkWevonOKeMMZu&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "empty-box-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_incorrect&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "empty-box-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_incorrect&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "empty-box-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_incorrect&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "empty-box-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_incorrect&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    // "empty-box-Deny Concession": "https://example.com/en/sa/pre-delivery-Passed",
                    // "empty-box-concession-tamper proof": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "part-missing": {
                    "parts-missing-Returnable Item": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=TzefEXmxyCZy8XSg5C&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "parts-missing-Image requested (Non-retunable)": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=TXF7O9TUf6PwSInJt0&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "parts-missing-Invalid Image (Non-retunable)": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=TXF7O9TUf6PwSInJt0&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "parts-missing-Denyconcession-3timesInvalidImage(Non-retunable)": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=TDYkTcZdtqb3djRDTA&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                },

                "wrong-item": {
                    "wrong-item-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_DNR_investigation_ongoing&contentId=Tm8VFPfek4dIlm0lJr&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "wrong-item-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "wrong-item-Image requested": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_worng_item_nonreturnable_photo_requested&contentId=TBv2zGBYHoZzGBYvOX&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "wrong-item-Valid Image (Returnable)": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=TzefEXmxyCZy8XSg5C&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "wrong-item-Invalid Image": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_worng_item_nonreturnable_photo_requested&contentId=TBv2zGBYHoZzGBYvOX&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "wrong-item-Deny-concession-3 times": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=TDYkTcZdtqb3djRDTA&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                        // "wrong-item-Deny-concession-tamper proof": "https://example.com/en/sa/pre-delivery-Passed",
                },
 
                "return": {
                    "Retrun-RMA-submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=CAP+Return&contentId=TzefEXmxyCZy8XSg5C&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "Retrun-IR-Requsted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "Retrun-Invalid IR (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "Retrun-Invalid IR (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "Retrun-Invalid IR (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "Retrun-Invalid IR (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "Retrun-Deny(RMA Expired)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_return_window_expired_concession_granted&contentId=TAv3HeXPS6CurHWqbW&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "Retrun-Deny(No Scan)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_no_carrier_scan_14_days&contentId=TbSPpHLO0rZ0qJWmN3&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                },

                "any-carrier": {
                    "any-carrier-RMA-submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=Return&contentId=Tj08QKlmpdLSp3nda3&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "any-carrier-receipt": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_request_proof_of_return&contentId=TTJ2FIVcriKJ0Lx053&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "any-carrier-Valid": "https://cs-assistant-eu.amazon.com/home/fetch?query=any-carrier-Valid&contentId=T5WgxQ2DmLujjaGsb9&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "any-carrier-Invalid": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_request_proof_of_return&contentId=TTJ2FIVcriKJ0Lx053&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "any-carrier-Not-Processed": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=T2z90JP4xOTZ8sFMqq&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "any-carrier-Deny": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_return_deny_shipping_refund&contentId=T0APKbtQVKC1XrMLql&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                },

                "mdr": {
                    "mdr-IR-requsted": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=TWhwmRKbyztfpxpCAg&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "mdr-Invalid-(incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=TWhwmRKbyztfpxpCAg&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "mdr-Invalid-(incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=TWhwmRKbyztfpxpCAg&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "mdr-Invalid-(Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=TWhwmRKbyztfpxpCAg&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                },  

                "refund": {
                    // "Refunds-Initiated-GC": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_pre-delivery_edd_not_passed&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    // "Refunds-Initiated-BA": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D9%82%D8%A8%D9%84+%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84_%D8%A7%D9%86%D8%AA%D8%B8%D8%A7%D8%B1&contentId=TzZHjxbDTmGDy6Y5yB&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    // "River-Refunds-GC": "https://example.com/en/sa/pre-delivery-EDD",
                    // "River-Refunds-BA": "https://example.com/en/sa/pre-delivery-Passed",
                    // "Refunds-Confirming": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "damaged-defective": {
                    "damaged-defective-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_DNR_investigation_ongoing&contentId=Tm8VFPfek4dIlm0lJr&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "damaged-defective-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "damaged-defective-Returnable": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=TzefEXmxyCZy8XSg5C&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "damaged-defective-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "damaged-defective-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "damaged-defective-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "damaged-defective-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "damaged-defective-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "damaged-defective-Image-requested(Non-Returnable)": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=TTj2eQympHOXWKUm6R&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "damaged-defective-Image-requested(Expired-Item)": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=TTj2eQympHOXWKUm6R&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "damaged-defective-Invalid-Image(Non-Returnable)(Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?&contentId=TTj2eQympHOXWKUm6R&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                },
            },

    "SA": { 
                "pre-delivery": {
                    "pre-delivery-EDD Not Passed": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_pre-delivery_edd_not_passed&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "pre-delivery-EDD-Passed": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_pre-delivery_edd_passed&contentId=TzZHjxbDTmGDy6Y5yB&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "pre-delivery-RTO arrive to FC": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_pre-delivery_edd_not_passed&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "pre-delivery-RTO (IR Requesting)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "pre-delivery-Invalid IR (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "pre-delivery-Invalid IR (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "pre-delivery-Invalid IR (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "pre-delivery-Invalid IR (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_delivery_incident_report&contentId=Tq9BFM4z54Hl6zsme9&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "pre-delivery-Deny Concession": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_delivery_window_passed&contentId=Tr5pvOoyVcYrRyRdef&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                },
                
                "dnr": {
                    "dnr-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing&contentId=Tm8VFPfek4dIlm0lJr&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "dnr-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "dnr-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "dnr-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "dnr-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "dnr-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "dnr-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "dnr-Deny(OTP)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_secure_delivery_dnr_deny&contentId=T82tdLg9OL5GbWvcWr&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "dnr-Deny(COD)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_secure_delivery_dnr_deny&contentId=T82tdLg9OL5GbWvcWr&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                },

                "item-missing": {
                    "item-missing-ARI-Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing&contentId=Tm8VFPfek4dIlm0lJr&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "item-missing-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "item-missing-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "item-missing-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "item-missing-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "item-missing-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "item-missing-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "item-missing-Deny Concession": "https://example.com/en/sa/pre-delivery-Passed",
                    "item-missing-concession-tamper proof": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "empty-box": {
                    "empty-box-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing&contentId=Tm8VFPfek4dIlm0lJr&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "empty-box-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "empty-box-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "empty-box-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "empty-box-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "empty-box-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "empty-box-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "empty-box-Deny Concession": "https://example.com/en/sa/pre-delivery-Passed",
                    "empty-box-concession-tamper proof": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "part-missing": {
                    "parts-missing-Returnable Item": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_return_required&contentId=TzefEXmxyCZy8XSg5C&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "parts-missing-Image requested (Non-retunable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_part_missing_nonreturnable_photo_requested&contentId=TXF7O9TUf6PwSInJt0&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "parts-missing-Invalid Image (Non-retunable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_part_missing_nonreturnable_photo_requested&contentId=TXF7O9TUf6PwSInJt0&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "parts-missing-Denyconcession-3timesInvalidImage(Non-retunable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_submission_after_deadline&contentId=TDYkTcZdtqb3djRDTA&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                },

                "wrong-item": {
                    "wrong-item-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing&contentId=Tm8VFPfek4dIlm0lJr&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "wrong-item-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "wrong-item-Image requested": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_wrong_item_photo_request&contentId=TBv2zGBYHoZzGBYvOX&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "wrong-item-Valid Image (Returnable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_return_required&contentId=TzefEXmxyCZy8XSg5C&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "wrong-item-Invalid Image": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_wrong_item_photo_request&contentId=TBv2zGBYHoZzGBYvOX&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "wrong-item-Deny-concession-3 times": "https://example.com/en/sa/pre-delivery-Passed",
                    "wrong-item-Deny-concession-tamper proof": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "return": {
                    "Retrun-RMA-submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_return_required&contentId=TzefEXmxyCZy8XSg5C&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "Retrun-IR-Requsted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "Retrun-Invalid IR (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "Retrun-Invalid IR (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "Retrun-Invalid IR (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "Retrun-Invalid IR (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "Retrun-Deny(RMA Expired)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_return_window_expired_concession_granted&contentId=TAv3HeXPS6CurHWqbW&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "Retrun-Deny(No Scan)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_no_carrier_scan_14_days&contentId=TbSPpHLO0rZ0qJWmN3&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                },

                "any-carrier": {
                    "any-carrier-RMA-submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=return_15_days&contentId=TeGOM5MAjP4Z36PiJp&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "any-carrier-receipt": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_request_proof_of_return&contentId=TTJ2FIVcriKJ0Lx053&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "any-carrier-Valid": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_return_shipping_refund&contentId=T5WgxQ2DmLujjaGsb9&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "any-carrier-Invalid": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_request_proof_of_return&contentId=TTJ2FIVcriKJ0Lx053&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "any-carrier-Not-Processed": "https://cs-assistant-eu.amazon.com/home/fetch?query=return_not_processed&contentId=Tjm4pnuxZ6slgTUqqI&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "any-carrier-Deny": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_failed_return_shipping_costs&contentId=T0APKbtQVKC1XrMLql&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                },

                "mdr": {
                    "mdr-IR-requsted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "mdr-Invalid-(incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "mdr-Invalid-(incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "mdr-Invalid-(Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                },

                "refund": {
                    // "Refunds-Initiated-GC": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_pre-delivery_edd_not_passed&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    // "Refunds-Initiated-BA": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D9%82%D8%A8%D9%84+%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84_%D8%A7%D9%86%D8%AA%D8%B8%D8%A7%D8%B1&contentId=TzZHjxbDTmGDy6Y5yB&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    // "River-Refunds-GC": "https://example.com/en/sa/pre-delivery-EDD",
                    // "River-Refunds-BA": "https://example.com/en/sa/pre-delivery-Passed",
                    // "Refunds-Initiated-Tabby": "https://example.com/en/sa/pre-delivery-Passed",
                    // "Refunds-Confirming-Tabby": "https://example.com/en/sa/pre-delivery-Passed",
                    // "Refunds-Confirming": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "damaged-defective": {
                    "damaged-defective-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing&contentId=Tm8VFPfek4dIlm0lJr&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "damaged-defective-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "damaged-defective-Returnable": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_return_required&contentId=TzefEXmxyCZy8XSg5C&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "damaged-defective-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request_damaged_defective&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "damaged-defective-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request_damaged_defective&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "damaged-defective-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request_damaged_defective&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "damaged-defective-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request_damaged_defective&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "damaged-defective-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request_damaged_defective&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "damaged-defective-Image-requested(Non-Returnable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_damaged_nonreturnable_photo_requested&contentId=TTj2eQympHOXWKUm6R&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "damaged-defective-Image-requested(Expired-Item)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_damaged_nonreturnable_photo_requested&contentId=TTj2eQympHOXWKUm6R&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                    "damaged-defective-Invalid-Image(Non-Returnable)(Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_damaged_nonreturnable_photo_requested&contentId=TTj2eQympHOXWKUm6R&marketplaceId=A17E79C6D8DWNP&locale=en-GB",
                },
            },

    "AE": {

                "pre-delivery": {
                    "pre-delivery-EDD Not Passed": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_pre-delivery_edd_not_passed&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "pre-delivery-EDD-Passed": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_pre-delivery_wait&contentId=TzZHjxbDTmGDy6Y5yB&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "pre-delivery-RTO arrive to FC": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_pre-delivery_edd_not_passed&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "pre-delivery-RTO (IR Requesting)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "pre-delivery-Invalid IR (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "pre-delivery-Invalid IR (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "pre-delivery-Invalid IR (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "pre-delivery-Invalid IR (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "pre-delivery-Deny Concession": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_delivery_window_passed&contentId=Tr5pvOoyVcYrRyRdef&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                },
               
                "dnr": {
                    "dnr-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing&contentId=Tm8VFPfek4dIlm0lJr&marketplaceId=A2VIGQ35RCS4UG&locale=en-US",
                    "dnr-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "dnr-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "dnr-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "dnr-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "dnr-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "dnr-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "dnr-Deny(OTP)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_secure_delivery_dnr_deny&contentId=T82tdLg9OL5GbWvcWr&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "dnr-Deny(COD)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_secure_delivery_dnr_deny&contentId=T82tdLg9OL5GbWvcWr&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                },

                "item-missing": {
                    "item-missing-ARI-Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing&contentId=Tm8VFPfek4dIlm0lJr&marketplaceId=A2VIGQ35RCS4UG&locale=en-US",
                    "item-missing-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "item-missing-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "item-missing-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "item-missing-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "item-missing-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "item-missing-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "item-missing-Deny Concession": "https://example.com/en/sa/pre-delivery-Passed",
                    "item-missing-concession-tamper proof": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "empty-box": {
                    "empty-box-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing&contentId=Tm8VFPfek4dIlm0lJr&marketplaceId=A2VIGQ35RCS4UG&locale=en-US",
                    "empty-box-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "empty-box-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "empty-box-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "empty-box-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "empty-box-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "empty-box-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "empty-box-Deny Concession": "https://example.com/en/sa/pre-delivery-Passed",
                    "empty-box-concession-tamper proof": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "part-missing": {
                    "parts-missing-Returnable Item": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_return_required&contentId=TzefEXmxyCZy8XSg5C&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "parts-missing-Image requested (Non-retunable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_part_missing_nonreturnable_photo_requested&contentId=TXF7O9TUf6PwSInJt0&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "parts-missing-Invalid Image (Non-retunable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_part_missing_nonreturnable_photo_requested&contentId=TXF7O9TUf6PwSInJt0&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "parts-missing-Denyconcession-3timesInvalidImage(Non-retunable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_submission_after_deadline&contentId=TDYkTcZdtqb3djRDTA&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                },

                "wrong-item": {
                    "wrong-item-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing&contentId=Tm8VFPfek4dIlm0lJr&marketplaceId=A2VIGQ35RCS4UG&locale=en-US",
                    "wrong-item-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "wrong-item-Image requested": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_wrong_item_photo_request&contentId=TBv2zGBYHoZzGBYvOX&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "wrong-item-Valid Image (Returnable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_return_required&contentId=TzefEXmxyCZy8XSg5C&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "wrong-item-Invalid Image": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_wrong_item_photo_request&contentId=TBv2zGBYHoZzGBYvOX&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "wrong-item-Deny-concession-3 times": "https://example.com/en/sa/pre-delivery-Passed",
                    "wrong-item-Deny-concession-tamper proof": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "return": {
                    "Retrun-RMA-submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_return_required&contentId=TzefEXmxyCZy8XSg5C&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "Retrun-IR-Requsted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "Retrun-Invalid IR (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "Retrun-Invalid IR (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "Retrun-Invalid IR (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "Retrun-Invalid IR (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "Retrun-Deny(RMA Expired)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_return_window_expired_concession_granted&contentId=TAv3HeXPS6CurHWqbW&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "Retrun-Deny(No Scan)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_no_carrier_scan_14_days&contentId=TbSPpHLO0rZ0qJWmN3&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                },

                "any-carrier": {
                    "any-carrier-RMA-submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=return_15_days&contentId=Tvh5R499zuYs9nD832&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "any-carrier-receipt": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_request_proof_of_return&contentId=TTJ2FIVcriKJ0Lx053&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "any-carrier-Valid": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_return_shipping_refund&contentId=T5WgxQ2DmLujjaGsb9&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "any-carrier-Invalid": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_request_proof_of_return&contentId=TTJ2FIVcriKJ0Lx053&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "any-carrier-Not-Processed": "https://cs-assistant-eu.amazon.com/home/fetch?query=return_not_processed&contentId=Tagk9dxKsF5ORR8QKA&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "any-carrier-Deny": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_failed_return_shipping_costs&contentId=T0APKbtQVKC1XrMLql&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                },

                "mdr": {
                    "mdr-IR-requsted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "mdr-Invalid-(incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "mdr-Invalid-(incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "mdr-Invalid-(Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                },

                "refund": {
                    // "Refunds-Initiated-GC": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_pre-delivery_edd_not_passed&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    // "Refunds-Initiated-BA": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D9%82%D8%A8%D9%84+%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84_%D8%A7%D9%86%D8%AA%D8%B8%D8%A7%D8%B1&contentId=TzZHjxbDTmGDy6Y5yB&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    // "River-Refunds-GC": "https://example.com/en/sa/pre-delivery-EDD",
                    // "River-Refunds-BA": "https://example.com/en/sa/pre-delivery-Passed",
                    // "Refunds-Initiated-Tabby": "https://example.com/en/sa/pre-delivery-Passed",
                    // "Refunds-Confirming-Tabby": "https://example.com/en/sa/pre-delivery-Passed",
                    // "Refunds-Confirming": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "damaged-defective": {
                    "damaged-defective-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing&contentId=Tm8VFPfek4dIlm0lJr&marketplaceId=A2VIGQ35RCS4UG&locale=en-US",
                    "damaged-defective-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "damaged-defective-Returnable": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_return_required&contentId=TzefEXmxyCZy8XSg5C&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "damaged-defective-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request_damaged_defective&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "damaged-defective-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request_damaged_defective&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "damaged-defective-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request_damaged_defective&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "damaged-defective-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request_damaged_defective&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "damaged-defective-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request_damaged_defective&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "damaged-defective-Image-requested(Non-Returnable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_damaged_nonreturnable_photo_requested&contentId=TTj2eQympHOXWKUm6R&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "damaged-defective-Image-requested(Expired-Item)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_damaged_nonreturnable_photo_requested&contentId=TTj2eQympHOXWKUm6R&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                    "damaged-defective-Invalid-Image(Non-Returnable)(Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_damaged_nonreturnable_photo_requested&contentId=TTj2eQympHOXWKUm6R&marketplaceId=A2VIGQ35RCS4UG&locale=en-GB",
                },
            },
        },

"ar": {
    "EG": {
                "pre-delivery": {
                    "pre-delivery-EDD Not Passed": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_pre-delivery_edd_not_passed&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "pre-delivery-EDD-Passed": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_pre-delivery_edd_passed&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "pre-delivery-RTO arrive to FC": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_pre-delivery_edd_not_passed&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "pre-delivery-RTO (IR Requesting)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "pre-delivery-Invalid IR (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=Incident+Report&contentId=Tq9BFM4z54Hl6zsme9&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "pre-delivery-Invalid IR (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=Incident+Report&contentId=Tq9BFM4z54Hl6zsme9&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "pre-delivery-Invalid IR (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=Incident+Report&contentId=Tq9BFM4z54Hl6zsme9&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "pre-delivery-Invalid IR (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=Incident+Report&contentId=Tq9BFM4z54Hl6zsme9&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                    "pre-delivery-Deny Concession": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_delivery_window_passed&contentId=Tr5pvOoyVcYrRyRdef&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                },
              
                "dnr": {
                    "dnr-FRD Not Passed": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_dnr_frd_wait&contentId=Tmiqa1xFdFDrlFD7Bx&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "dnr-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing&contentId=TApKGOwqz9bvN4GaIs&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "dnr-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "dnr-FRD Not Passed": "https://cs-assistant-eu.amazon.com/home/fetch?query=%D8%AA%D8%AD%D9%82%D9%8A%D9%82_CAP_IR_%D8%AC%D8%A7%D8%B1%D9%8D&contentId=Tmiqa1xFdFDrlFD7Bx&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "dnr-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit&contentId=TwoVjkWevonOKeMMZu&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "dnr-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_no_action&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "dnr-Invalid Affidavit (incomplete)": "hhttps://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_no_action&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "dnr-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_no_action&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "dnr-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_no_action&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "dnr-Deny(OTP)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_secure_delivery_dnr_deny&contentId=T82tdLg9OL5GbWvcWr&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "dnr-Deny(COD)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_secure_delivery_dnr_deny&contentId=T82tdLg9OL5GbWvcWr&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                },

                "item-missing": {
                    "item-missing-ARI-Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing&contentId=TApKGOwqz9bvN4GaIs&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "item-missing-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "item-missing-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit&contentId=TwoVjkWevonOKeMMZu&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "item-missing-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_no_action&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "item-missing-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_no_action&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "item-missing-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_no_action&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "item-missing-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_no_action&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    // "item-missing-Deny Concession": "https://example.com/en/sa/pre-delivery-Passed",
                    // "item-missing-concession-tamper proof": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "empty-box": {
                    "empty-box-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing&contentId=TApKGOwqz9bvN4GaIs&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "empty-box-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "empty-box-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit&contentId=TwoVjkWevonOKeMMZu&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "empty-box-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_no_action&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "empty-box-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_no_action&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "empty-box-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_no_action&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "empty-box-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_no_action&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    // "empty-box-Deny Concession": "https://example.com/en/sa/pre-delivery-Passed",
                    // "empty-box-concession-tamper proof": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "part-missing": {
                    "parts-missing-Returnable Item": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_return_required&contentId=TzefEXmxyCZy8XSg5C&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "parts-missing-Image requested (Non-retunable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_part_missing_nonreturnable_photo_requested&contentId=TXF7O9TUf6PwSInJt0&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "parts-missing-Invalid Image (Non-retunable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_part_missing_nonreturnable_photo_requested&contentId=TXF7O9TUf6PwSInJt0&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "parts-missing-Denyconcession-3timesInvalidImage(Non-retunable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_submission_after_deadline&contentId=TDYkTcZdtqb3djRDTA&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                },

                "wrong-item": {
                    "wrong-item-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing&contentId=TApKGOwqz9bvN4GaIs&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "wrong-item-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "wrong-item-Image requested": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_wrong_item_photo_request&contentId=TBv2zGBYHoZzGBYvOX&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "wrong-item-Valid Image (Returnable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_return_required&contentId=TzefEXmxyCZy8XSg5C&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "wrong-item-Invalid Image": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_wrong_item_photo_request&contentId=TBv2zGBYHoZzGBYvOX&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "wrong-item-Deny-concession-3 times": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_submission_after_deadline&contentId=TDYkTcZdtqb3djRDTA&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    // "wrong-item-Deny-concession-tamper proof": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "return": {
                    "Retrun-RMA-submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=return_15_days&contentId=Tj08QKlmpdLSp3nda3&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "Retrun-IR-Requsted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "Retrun-Invalid IR (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "Retrun-Invalid IR (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "Retrun-Invalid IR (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "Retrun-Invalid IR (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "Retrun-Deny(RMA Expired)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_return_window_expired_concession_denied&contentId=TAv3HeXPS6CurHWqbW&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "Retrun-Deny(No Scan)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_no_carrier_scan_14_days&contentId=TbSPpHLO0rZ0qJWmN3&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                },

                "any-carrier": {
                    "any-carrier-RMA-submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=return_15_days&contentId=Tj08QKlmpdLSp3nda3&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "any-carrier-receipt": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_request_proof_of_return&contentId=TTJ2FIVcriKJ0Lx053&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "any-carrier-Valid": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_return_shipping_refund&contentId=T5WgxQ2DmLujjaGsb9&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "any-carrier-Invalid": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_request_proof_of_return&contentId=TTJ2FIVcriKJ0Lx053&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "any-carrier-Not-Processed": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap+return_not_processed&contentId=TNBYN4nRiMc0QEgUww&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "any-carrier-Deny": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_return_deny_shipping_refund&contentId=T0APKbtQVKC1XrMLql&marketplaceId=ARBP9OOSHTCHU&locale=en-GB",
                },

                "mdr": {
                    "mdr-IR-requsted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "mdr-Invalid-(incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "mdr-Invalid-(incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "mdr-Invalid-(Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                },

                "refund": {
                    // "Refunds-Initiated-GC": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_pre-delivery_edd_not_passed&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    // "Refunds-Initiated-BA": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D9%82%D8%A8%D9%84+%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84_%D8%A7%D9%86%D8%AA%D8%B8%D8%A7%D8%B1&contentId=TzZHjxbDTmGDy6Y5yB&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    // "River-Refunds-GC": "https://example.com/en/sa/pre-delivery-EDD",
                    // "River-Refunds-BA": "https://example.com/en/sa/pre-delivery-Passed",
                    // "Refunds-Initiated-Tabby": "https://example.com/en/sa/pre-delivery-Passed",
                    // "Refunds-Confirming-Tabby": "https://example.com/en/sa/pre-delivery-Passed",
                    // "Refunds-Confirming": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "damaged-defective": {
                    "damaged-defective-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing&contentId=TYtSJ5MNAOVtNVGOAh&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "damaged-defective-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_investigation_ongoing_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "damaged-defective-Returnable": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_return_required&contentId=TzefEXmxyCZy8XSg5C&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "damaged-defective-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request_damaged_defective&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "damaged-defective-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request_damaged_defective&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "damaged-defective-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request_damaged_defective&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "damaged-defective-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request_damaged_defective&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "damaged-defective-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_affidavit_request_damaged_defective&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "damaged-defective-Image-requested(Non-Returnable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_damaged_nonreturnable_photo_requested&contentId=TTj2eQympHOXWKUm6R&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "damaged-defective-Image-requested(Expired-Item)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_damaged_nonreturnable_photo_requested&contentId=TTj2eQympHOXWKUm6R&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "damaged-defective-Invalid-Image(Non-Returnable)(Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_damaged_nonreturnable_photo_requested&contentId=TTj2eQympHOXWKUm6R&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                },
            },

    "SA": {
                "pre-delivery": {
                    "pre-delivery-EDD Not Passed": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D9%82%D8%A8%D9%84+%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84_%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE+%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84+%D8%A7%D9%84%D9%85%D8%AA%D9%88%D9%82%D8%B9_%D9%84%D9%85+%D9%8A%D8%AA%D9%85+%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D9%88%D8%B2&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "pre-delivery-EDD-Passed": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D9%82%D8%A8%D9%84+%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84_%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE+%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84+%D8%A7%D9%84%D9%85%D8%AA%D9%88%D9%82%D8%B9_%D9%84%D9%85+%D9%8A%D8%AA%D9%85+%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D9%88%D8%B2&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "pre-delivery-RTO arrive to FC": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D9%82%D8%A8%D9%84+%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84_%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE+%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84+%D8%A7%D9%84%D9%85%D8%AA%D9%88%D9%82%D8%B9_%D9%84%D9%85+%D9%8A%D8%AA%D9%85+%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D9%88%D8%B2&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "pre-delivery-RTO (IR Requesting)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "pre-delivery-Invalid IR (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "pre-delivery-Invalid IR (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "pre-delivery-Invalid IR (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "pre-delivery-Invalid IR (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "pre-delivery-Deny Concession": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84_%D8%A7%D9%84%D8%AC%D8%AF%D9%88%D9%84+%D8%A7%D9%84%D8%B2%D9%85%D9%86%D9%8A_%D8%AA%D8%AC%D8%A7%D9%88%D8%B2&contentId=Tr5pvOoyVcYrRyRdef&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                },
               
                "dnr": {
                    "dnr-FRD Not Passed": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_dnr_frd_wait&contentId=Tmiqa1xFdFDrlFD7Bx&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "dnr-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=%D8%AA%D8%AD%D9%82%D9%8A%D9%82_CAP_IR_%D8%AC%D8%A7%D8%B1%D9%8D&contentId=TApKGOwqz9bvN4GaIs&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "dnr-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%AA%D8%AD%D9%82%D9%8A%D9%82_%D9%85%D8%B3%D8%AA%D9%85%D8%B1_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "dnr-FRD Not Passed": "https://cs-assistant-eu.amazon.com/home/fetch?query=%D8%AA%D8%AD%D9%82%D9%8A%D9%82_CAP_IR_%D8%AC%D8%A7%D8%B1%D9%8D&contentId=Tmiqa1xFdFDrlFD7Bx&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "dnr-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%B7%D9%84%D8%A8_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "dnr-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "dnr-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "dnr-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "dnr-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "dnr-Deny(OTP)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_secure_delivery_dnr_deny&contentId=T82tdLg9OL5GbWvcWr&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "dnr-Deny(COD)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_secure_delivery_dnr_deny&contentId=T82tdLg9OL5GbWvcWr&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                },

                "item-missing": {
                    "item-missing-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=%D8%AA%D8%AD%D9%82%D9%8A%D9%82_CAP_IR_%D8%AC%D8%A7%D8%B1%D9%8D&contentId=TApKGOwqz9bvN4GaIs&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "item-missing-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%AA%D8%AD%D9%82%D9%8A%D9%82_%D9%85%D8%B3%D8%AA%D9%85%D8%B1_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "item-missing-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%B7%D9%84%D8%A8_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "item-missing-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "item-missing-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "item-missing-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "item-missing-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    // "item-missing-Deny Concession": "https://example.com/en/sa/pre-delivery-Passed",
                    // "item-missing-concession-tamper proof": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "empty-box": {
                    "empty-box-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=%D8%AA%D8%AD%D9%82%D9%8A%D9%82_CAP_IR_%D8%AC%D8%A7%D8%B1%D9%8D&contentId=TApKGOwqz9bvN4GaIs&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "empty-box-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%AA%D8%AD%D9%82%D9%8A%D9%82_%D9%85%D8%B3%D8%AA%D9%85%D8%B1_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "empty-box-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%B7%D9%84%D8%A8_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "empty-box-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "empty-box-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "empty-box-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "empty-box-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    // "empty-box-Deny Concession": "https://example.com/en/sa/pre-delivery-Passed",
                    // "empty-box-concession-tamper proof": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "part-missing": {
                    "parts-missing-Returnable Item": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%A5%D8%B1%D8%AC%D8%A7%D8%B9_%D9%85%D8%B7%D9%84%D9%88%D8%A8&contentId=TzefEXmxyCZy8XSg5C&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "parts-missing-Image requested (Non-retunable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_part_missing_nonreturnable_photo_requested&contentId=TXF7O9TUf6PwSInJt0&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "parts-missing-Invalid Image (Non-retunable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_part_missing_nonreturnable_photo_requested&contentId=TXF7O9TUf6PwSInJt0&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "parts-missing-Denyconcession-3timesInvalidImage(Non-retunable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%A5%D8%B1%D8%B3%D8%A7%D9%84_%D8%A8%D8%B9%D8%AF_%D8%A7%D9%84%D9%85%D9%88%D8%B9%D8%AF+%D8%A7%D9%84%D9%86%D9%87%D8%A7%D8%A6%D9%8A&contentId=TDYkTcZdtqb3djRDTA&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                },

                "wrong-item": {
                    "wrong-item-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=%D8%AA%D8%AD%D9%82%D9%8A%D9%82_CAP_IR_%D8%AC%D8%A7%D8%B1%D9%8D&contentId=TApKGOwqz9bvN4GaIs&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "wrong-item-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%AA%D8%AD%D9%82%D9%8A%D9%82_%D9%85%D8%B3%D8%AA%D9%85%D8%B1_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "wrong-item-Image requested": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D9%85%D9%86%D8%AA%D8%AC_%D8%AE%D8%A7%D8%B7%D8%A6_%D8%B7%D9%84%D8%A8_%D8%B5%D9%88%D8%B1%D8%A9&contentId=TBv2zGBYHoZzGBYvOX&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "wrong-item-Valid Image (Returnable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%A5%D8%B1%D8%AC%D8%A7%D8%B9_%D9%85%D8%B7%D9%84%D9%88%D8%A8&contentId=TzefEXmxyCZy8XSg5C&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "wrong-item-Invalid Image": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D9%85%D9%86%D8%AA%D8%AC_%D8%AE%D8%A7%D8%B7%D8%A6_%D8%B7%D9%84%D8%A8_%D8%B5%D9%88%D8%B1%D8%A9&contentId=TBv2zGBYHoZzGBYvOX&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "wrong-item-Deny-concession-3 times": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%A5%D8%B1%D8%B3%D8%A7%D9%84_%D8%A8%D8%B9%D8%AF_%D8%A7%D9%84%D9%85%D9%88%D8%B9%D8%AF+%D8%A7%D9%84%D9%86%D9%87%D8%A7%D8%A6%D9%8A&contentId=TDYkTcZdtqb3djRDTA&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    // "wrong-item-Deny-concession-tamper proof": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "return": {
                    "Retrun-RMA-submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=return_15_days&contentId=TeGOM5MAjP4Z36PiJp&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "Retrun-IR-Requsted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "Retrun-Invalid IR (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "Retrun-Invalid IR (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "Retrun-Invalid IR (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "Retrun-Invalid IR (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "Retrun-Deny(RMA Expired)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D8%B1%D8%AC%D8%A7%D8%B9_%D8%A7%D9%84%D8%AC%D8%AF%D9%88%D9%84_%D8%A7%D9%86%D8%AA%D9%87%D9%89_%D8%A7%D9%84%D8%AA%D8%B9%D9%88%D9%8A%D8%B6_%D9%85%D8%B1%D9%81%D9%88%D8%B6&contentId=TAv3HeXPS6CurHWqbW&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "Retrun-Deny(No Scan)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D9%84%D9%85_%D9%8A%D8%AA%D9%85_%D8%A7%D9%84%D9%85%D8%B3%D8%AD_%D8%A7%D9%84%D8%B6%D9%88%D8%A6%D9%8A_%D8%B4%D8%B1%D9%83%D8%A9_%D8%A7%D9%84%D8%B4%D8%AD%D9%86_14_%D9%8A%D9%88%D9%85%D9%8B%D8%A7&contentId=TbSPpHLO0rZ0qJWmN3&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                },

                "any-carrier": {
                    "any-carrier-RMA-submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=return_15_days&contentId=TeGOM5MAjP4Z36PiJp&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "any-carrier-receipt": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_request_proof_of_return&contentId=TTJ2FIVcriKJ0Lx053&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "any-carrier-Valid": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D8%B1%D8%AC%D8%A7%D8%B9_%D8%A7%D9%84%D8%B4%D8%AD%D9%86+_+%D8%A7%D8%B3%D8%AA%D8%B1%D8%AF%D8%A7%D8%AF&contentId=T5WgxQ2DmLujjaGsb9&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "any-carrier-Invalid": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_request_proof_of_return&contentId=TTJ2FIVcriKJ0Lx053&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "any-carrier-Not-Processed": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D9%84%D9%85_%D8%AA%D8%AA%D9%85_%D9%85%D8%B9%D8%A7%D9%84%D8%AC%D8%A9_%D8%A7%D9%84%D8%A5%D8%B1%D8%AC%D8%A7%D8%B9&contentId=TNBYN4nRiMc0QEgUww&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    // "any-carrier-Deny": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "mdr": {
                    "mdr-IR-requsted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "mdr-Invalid-(incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "mdr-Invalid-(incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "mdr-Invalid-(Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                },

                "refund": {
                    // "Refunds-Initiated-GC": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_pre-delivery_edd_not_passed&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    // "Refunds-Initiated-BA": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D9%82%D8%A8%D9%84+%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84_%D8%A7%D9%86%D8%AA%D8%B8%D8%A7%D8%B1&contentId=TzZHjxbDTmGDy6Y5yB&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    // "River-Refunds-GC": "https://example.com/en/sa/pre-delivery-EDD",
                    // "River-Refunds-BA": "https://example.com/en/sa/pre-delivery-Passed",
                    // "Refunds-Initiated-Tabby": "https://example.com/en/sa/pre-delivery-Passed",
                    // "Refunds-Confirming-Tabby": "https://example.com/en/sa/pre-delivery-Passed",
                    // "Refunds-Confirming": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "damaged-defective": {
                    "damaged-defective-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%AA%D8%AD%D9%82%D9%8A%D9%82_%D8%AC%D8%A7%D8%B1%D9%8D_%D8%AA%D8%A7%D9%84%D9%81%D8%A9_%D9%85%D8%AA%D8%B6%D8%B1%D8%B1%D8%A9&contentId=TYtSJ5MNAOVtNVGOAh&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "damaged-defective-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%AA%D8%AD%D9%82%D9%8A%D9%82_%D9%85%D8%B3%D8%AA%D9%85%D8%B1_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "damaged-defective-Returnable": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%A5%D8%B1%D8%AC%D8%A7%D8%B9_%D9%85%D8%B7%D9%84%D9%88%D8%A8&contentId=TzefEXmxyCZy8XSg5C&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "damaged-defective-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%B7%D9%84%D8%A8_%D8%AA%D8%A7%D9%84%D9%81_%D9%85%D8%AA%D8%B6%D8%B1%D8%B1&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "damaged-defective-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%B7%D9%84%D8%A8_%D8%AA%D8%A7%D9%84%D9%81_%D9%85%D8%AA%D8%B6%D8%B1%D8%B1&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "damaged-defective-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%B7%D9%84%D8%A8_%D8%AA%D8%A7%D9%84%D9%81_%D9%85%D8%AA%D8%B6%D8%B1%D8%B1&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "damaged-defective-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%B7%D9%84%D8%A8_%D8%AA%D8%A7%D9%84%D9%81_%D9%85%D8%AA%D8%B6%D8%B1%D8%B1&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "damaged-defective-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%B7%D9%84%D8%A8_%D8%AA%D8%A7%D9%84%D9%81_%D9%85%D8%AA%D8%B6%D8%B1%D8%B1&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "damaged-defective-Image-requested(Non-Returnable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%AA%D8%A7%D9%84%D9%81%D8%A9_%D8%BA%D9%8A%D8%B1+%D9%82%D8%A7%D8%A8%D9%84%D8%A9+%D9%84%D9%84%D8%A5%D8%B1%D8%AC%D8%A7%D8%B9_%D8%A7%D9%84%D8%B5%D9%88%D8%B1%D8%A9_%D9%85%D8%B7%D9%84%D9%88%D8%A8%D8%A9&contentId=TTj2eQympHOXWKUm6R&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "damaged-defective-Image-requested(Expired-Item)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%AA%D8%A7%D9%84%D9%81%D8%A9_%D8%BA%D9%8A%D8%B1+%D9%82%D8%A7%D8%A8%D9%84%D8%A9+%D9%84%D9%84%D8%A5%D8%B1%D8%AC%D8%A7%D8%B9_%D8%A7%D9%84%D8%B5%D9%88%D8%B1%D8%A9_%D9%85%D8%B7%D9%84%D9%88%D8%A8%D8%A9&contentId=TTj2eQympHOXWKUm6R&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                    "damaged-defective-Invalid-Image(Non-Returnable)(Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%AA%D8%A7%D9%84%D9%81%D8%A9_%D8%BA%D9%8A%D8%B1+%D9%82%D8%A7%D8%A8%D9%84%D8%A9+%D9%84%D9%84%D8%A5%D8%B1%D8%AC%D8%A7%D8%B9_%D8%A7%D9%84%D8%B5%D9%88%D8%B1%D8%A9_%D9%85%D8%B7%D9%84%D9%88%D8%A8%D8%A9&contentId=TTj2eQympHOXWKUm6R&marketplaceId=A17E79C6D8DWNP&locale=ar-AE",
                },
            },

    "AE": {
                "pre-delivery": {
                    "pre-delivery-EDD Not Passed": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D9%82%D8%A8%D9%84+%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84_%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE+%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84+%D8%A7%D9%84%D9%85%D8%AA%D9%88%D9%82%D8%B9_%D9%84%D9%85+%D9%8A%D8%AA%D9%85+%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D9%88%D8%B2&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "pre-delivery-EDD-Passed": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D9%82%D8%A8%D9%84+%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84_%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE+%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84+%D8%A7%D9%84%D9%85%D8%AA%D9%88%D9%82%D8%B9_%D9%84%D9%85+%D9%8A%D8%AA%D9%85+%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D9%88%D8%B2&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "pre-delivery-RTO arrive to FC": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D9%82%D8%A8%D9%84+%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84_%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE+%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84+%D8%A7%D9%84%D9%85%D8%AA%D9%88%D9%82%D8%B9_%D9%84%D9%85+%D9%8A%D8%AA%D9%85+%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D9%88%D8%B2&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "pre-delivery-RTO (IR Requesting)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "pre-delivery-Invalid IR (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "pre-delivery-Invalid IR (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "pre-delivery-Invalid IR (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "pre-delivery-Invalid IR (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "pre-delivery-Deny Concession": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84_%D8%A7%D9%84%D8%AC%D8%AF%D9%88%D9%84+%D8%A7%D9%84%D8%B2%D9%85%D9%86%D9%8A_%D8%AA%D8%AC%D8%A7%D9%88%D8%B2&contentId=Tr5pvOoyVcYrRyRdef&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                },
                
                "dnr": {
                    "dnr-FRD Not Passed": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_dnr_frd_wait&contentId=Tmiqa1xFdFDrlFD7Bx&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "dnr-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=%D8%AA%D8%AD%D9%82%D9%8A%D9%82_CAP_IR_%D8%AC%D8%A7%D8%B1%D9%8D&contentId=TApKGOwqz9bvN4GaIs&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "dnr-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%AA%D8%AD%D9%82%D9%8A%D9%82_%D9%85%D8%B3%D8%AA%D9%85%D8%B1_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "dnr-FRD Not Passed": "https://cs-assistant-eu.amazon.com/home/fetch?query=%D8%AA%D8%AD%D9%82%D9%8A%D9%82_CAP_IR_%D8%AC%D8%A7%D8%B1%D9%8D&contentId=Tmiqa1xFdFDrlFD7Bx&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "dnr-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%B7%D9%84%D8%A8_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "dnr-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "dnr-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "dnr-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "dnr-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "dnr-Deny(OTP)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_secure_delivery_dnr_deny&contentId=T82tdLg9OL5GbWvcWr&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "dnr-Deny(COD)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_secure_delivery_dnr_deny&contentId=T82tdLg9OL5GbWvcWr&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                },

                "item-missing": {
                    "item-missing-ARI-Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=%D8%AA%D8%AD%D9%82%D9%8A%D9%82_CAP_IR_%D8%AC%D8%A7%D8%B1%D9%8D&contentId=TApKGOwqz9bvN4GaIs&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "item-missing-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%AA%D8%AD%D9%82%D9%8A%D9%82_%D9%85%D8%B3%D8%AA%D9%85%D8%B1_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "item-missing-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%B7%D9%84%D8%A8_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "item-missing-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "item-missing-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "item-missing-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "item-missing-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    // "item-missing-Deny Concession": "https://example.com/en/sa/pre-delivery-Passed",
                    // "item-missing-concession-tamper proof": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "empty-box": {
                    "empty-box-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=%D8%AA%D8%AD%D9%82%D9%8A%D9%82_CAP_IR_%D8%AC%D8%A7%D8%B1%D9%8D&contentId=TApKGOwqz9bvN4GaIs&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "empty-box-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%AA%D8%AD%D9%82%D9%8A%D9%82_%D9%85%D8%B3%D8%AA%D9%85%D8%B1_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "empty-box-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%B7%D9%84%D8%A8_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9&contentId=TwoVjkWevonOKeMMZu&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "empty-box-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "empty-box-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "empty-box-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "empty-box-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%A8%D8%AF%D9%88%D9%86_%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1&contentId=TDEaDBjx3uxK6pXD3b&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    // "empty-box-Deny Concession": "https://example.com/en/sa/pre-delivery-Passed",
                    // "empty-box-concession-tamper proof": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "part-missing": {
                    "parts-missing-Returnable Item": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%A5%D8%B1%D8%AC%D8%A7%D8%B9_%D9%85%D8%B7%D9%84%D9%88%D8%A8&contentId=TzefEXmxyCZy8XSg5C&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "parts-missing-Image requested (Non-retunable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_part_missing_nonreturnable_photo_requested&contentId=TXF7O9TUf6PwSInJt0&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "parts-missing-Invalid Image (Non-retunable)": "https://example.com/en/sa/pre-delivery-EDD",
                    "parts-missing-Denyconcession-3timesInvalidImage(Non-retunable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%A5%D8%B1%D8%B3%D8%A7%D9%84_%D8%A8%D8%B9%D8%AF_%D8%A7%D9%84%D9%85%D9%88%D8%B9%D8%AF+%D8%A7%D9%84%D9%86%D9%87%D8%A7%D8%A6%D9%8A&contentId=TDYkTcZdtqb3djRDTA&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                },

                "wrong-item": {
                    "wrong-item-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_pre-delivery_edd_not_passed&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "wrong-item-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D9%82%D8%A8%D9%84+%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84_%D8%A7%D9%86%D8%AA%D8%B8%D8%A7%D8%B1&contentId=TzZHjxbDTmGDy6Y5yB&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    "wrong-item-Image requested": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D9%85%D9%86%D8%AA%D8%AC_%D8%AE%D8%A7%D8%B7%D8%A6_%D8%B7%D9%84%D8%A8_%D8%B5%D9%88%D8%B1%D8%A9&contentId=TBv2zGBYHoZzGBYvOX&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "wrong-item-Valid Image (Returnable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%A5%D8%B1%D8%AC%D8%A7%D8%B9_%D9%85%D8%B7%D9%84%D9%88%D8%A8&contentId=TzefEXmxyCZy8XSg5C&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "wrong-item-Invalid Image": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D9%85%D9%86%D8%AA%D8%AC_%D8%AE%D8%A7%D8%B7%D8%A6_%D8%B7%D9%84%D8%A8_%D8%B5%D9%88%D8%B1%D8%A9&contentId=TBv2zGBYHoZzGBYvOX&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "wrong-item-Deny-concession-3 times": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%A5%D8%B1%D8%B3%D8%A7%D9%84_%D8%A8%D8%B9%D8%AF_%D8%A7%D9%84%D9%85%D9%88%D8%B9%D8%AF+%D8%A7%D9%84%D9%86%D9%87%D8%A7%D8%A6%D9%8A&contentId=TDYkTcZdtqb3djRDTA&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    // "wrong-item-Deny-concession-tamper proof": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "return": {
                    "Retrun-RMA-submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=return_15_days&contentId=Tvh5R499zuYs9nD832&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "Retrun-IR-Requsted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "Retrun-Invalid IR (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "Retrun-Invalid IR (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "Retrun-Invalid IR (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "Retrun-Invalid IR (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "Retrun-Deny(RMA Expired)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D8%B1%D8%AC%D8%A7%D8%B9_%D8%A7%D9%84%D8%AC%D8%AF%D9%88%D9%84_%D8%A7%D9%86%D8%AA%D9%87%D9%89_%D8%A7%D9%84%D8%AA%D8%B9%D9%88%D9%8A%D8%B6_%D9%85%D8%B1%D9%81%D9%88%D8%B6&contentId=TAv3HeXPS6CurHWqbW&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "Retrun-Deny(No Scan)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D9%84%D9%85_%D9%8A%D8%AA%D9%85_%D8%A7%D9%84%D9%85%D8%B3%D8%AD_%D8%A7%D9%84%D8%B6%D9%88%D8%A6%D9%8A_%D8%B4%D8%B1%D9%83%D8%A9_%D8%A7%D9%84%D8%B4%D8%AD%D9%86_14_%D9%8A%D9%88%D9%85%D9%8B%D8%A7&contentId=TbSPpHLO0rZ0qJWmN3&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                },

                "any-carrier": {
                    "any-carrier-RMA-submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=return_15_days&contentId=Tvh5R499zuYs9nD832&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "any-carrier-receipt": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_request_proof_of_return&contentId=TTJ2FIVcriKJ0Lx053&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "any-carrier-Valid": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D8%B1%D8%AC%D8%A7%D8%B9_%D8%A7%D9%84%D8%B4%D8%AD%D9%86+_+%D8%A7%D8%B3%D8%AA%D8%B1%D8%AF%D8%A7%D8%AF&contentId=T5WgxQ2DmLujjaGsb9&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "any-carrier-Invalid": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_request_proof_of_return&contentId=TTJ2FIVcriKJ0Lx053&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "any-carrier-Not-Processed": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D9%84%D9%85_%D8%AA%D8%AA%D9%85_%D9%85%D8%B9%D8%A7%D9%84%D8%AC%D8%A9_%D8%A7%D9%84%D8%A5%D8%B1%D8%AC%D8%A7%D8%B9&contentId=TNBYN4nRiMc0QEgUww&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    // "any-carrier-Deny": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "mdr": {
                    "mdr-IR-requsted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "mdr-Invalid-(incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "mdr-Invalid-(incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "mdr-Invalid-(Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_incident_report&contentId=T4mGuNc2sqlFYCF7a3&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                },

                "refund": {
                    // "Refunds-Initiated-GC": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_pre-delivery_edd_not_passed&contentId=Tjlmjb4PQENIMjsbK0&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    // "Refunds-Initiated-BA": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D9%82%D8%A8%D9%84+%D8%A7%D9%84%D8%AA%D9%88%D8%B5%D9%8A%D9%84_%D8%A7%D9%86%D8%AA%D8%B8%D8%A7%D8%B1&contentId=TzZHjxbDTmGDy6Y5yB&marketplaceId=ARBP9OOSHTCHU&locale=ar-AE",
                    // "River-Refunds-GC": "https://example.com/en/sa/pre-delivery-EDD",
                    // "River-Refunds-BA": "https://example.com/en/sa/pre-delivery-Passed",
                    // "Refunds-Initiated-Tabby": "https://example.com/en/sa/pre-delivery-Passed",
                    // "Refunds-Confirming-Tabby": "https://example.com/en/sa/pre-delivery-Passed",
                    // "Refunds-Confirming": "https://example.com/en/sa/pre-delivery-Passed",
                },

                "damaged-defective": {
                    "damaged-defective-ARI Submitted": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%AA%D8%AD%D9%82%D9%8A%D9%82_%D8%AC%D8%A7%D8%B1%D9%8D_%D8%AA%D8%A7%D9%84%D9%81%D8%A9_%D9%85%D8%AA%D8%B6%D8%B1%D8%B1%D8%A9&contentId=TYtSJ5MNAOVtNVGOAh&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "damaged-defective-ARI Ongoing": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%AA%D8%AD%D9%82%D9%8A%D9%82_%D9%85%D8%B3%D8%AA%D9%85%D8%B1_2&contentId=TgYSATuy2NwzEJVhRE&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "damaged-defective-Returnable": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A7%D9%84%D8%A5%D8%B1%D8%AC%D8%A7%D8%B9_%D9%85%D8%B7%D9%84%D9%88%D8%A8&contentId=TzefEXmxyCZy8XSg5C&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "damaged-defective-Affidavit": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%B7%D9%84%D8%A8_%D8%AA%D8%A7%D9%84%D9%81_%D9%85%D8%AA%D8%B6%D8%B1%D8%B1&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "damaged-defective-Invalid Affidavit (incorrect)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%B7%D9%84%D8%A8_%D8%AA%D8%A7%D9%84%D9%81_%D9%85%D8%AA%D8%B6%D8%B1%D8%B1&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "damaged-defective-Invalid Affidavit (incomplete)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%B7%D9%84%D8%A8_%D8%AA%D8%A7%D9%84%D9%81_%D9%85%D8%AA%D8%B6%D8%B1%D8%B1&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "damaged-defective-Invalid Affidavit (Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%B7%D9%84%D8%A8_%D8%AA%D8%A7%D9%84%D9%81_%D9%85%D8%AA%D8%B6%D8%B1%D8%B1&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "damaged-defective-Invalid Affidavit (Wrong-Format)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_%D8%A5%D9%81%D8%A7%D8%AF%D8%A9_%D8%AE%D8%B7%D9%8A%D8%A9_%D8%B7%D9%84%D8%A8_%D8%AA%D8%A7%D9%84%D9%81_%D9%85%D8%AA%D8%B6%D8%B1%D8%B1&contentId=TjNerM5rH5Qo0UeSrA&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "damaged-defective-Image-requested(Non-Returnable)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_damaged_nonreturnable_photo_requested&contentId=TTj2eQympHOXWKUm6R&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "damaged-defective-Image-requested(Expired-Item)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_damaged_nonreturnable_photo_requested&contentId=TTj2eQympHOXWKUm6R&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                    "damaged-defective-Invalid-Image(Non-Returnable)(Missing)": "https://cs-assistant-eu.amazon.com/home/fetch?query=cap_damaged_nonreturnable_photo_requested&contentId=TTj2eQympHOXWKUm6R&marketplaceId=A2VIGQ35RCS4UG&locale=ar-AE",
                },
            },
        }
    };

    return (links[lang] && links[lang][country] && links[lang][country][issue] && links[lang][country][issue][option])
        ? links[lang][country][issue][option]
        : null;
}


function initialize() {
    preloadData();
    updateMoreInfo();

// const resourceToggleButton = document.getElementById('resource-toggle-button');
// const resourceLinksContainer = document.getElementById('resource-links-container');
// const closedIcon = document.getElementById('closed-icon');
// const openIcon = document.getElementById('open-icon');

// resourceToggleButton.addEventListener('click', (event) => {
//     event.stopPropagation();
//     if (resourceLinksContainer.style.display === 'none' || resourceLinksContainer.style.display === '') {
//         resourceLinksContainer.style.display = 'block';
//         closedIcon.style.display = 'none';
//         openIcon.style.display = 'block'; 
//     } else {
//         resourceLinksContainer.style.display = 'none';
//         closedIcon.style.display = 'block';
//         openIcon.style.display = 'none'; 
//     }
// });

document.addEventListener('click', (event) => {
    const isClickInside = resourceLinksContainer.contains(event.target) || resourceToggleButton.contains(event.target);
    
    if (!isClickInside) {
        resourceLinksContainer.style.display = 'none';
        closedIcon.style.display = 'block';
        openIcon.style.display = 'none'; 
    }
});


    document.getElementById("order-form").addEventListener("submit", function(event) {
        event.preventDefault();
        displayData();
    });
}


document.addEventListener("DOMContentLoaded", function() {
    initialize();
    
    const toggle = document.getElementById('darkmode-toggle');
    const darkThemeClass = 'dark-theme';

    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        document.body.classList.add(darkThemeClass);
        toggle.checked = true; 
    } 
    else {
        document.body.classList.remove(darkThemeClass);
        toggle.checked = false; 
    }

    toggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add(darkThemeClass);
            localStorage.setItem('darkMode', 'true');
        } else {
            document.body.classList.remove(darkThemeClass);
            localStorage.setItem('darkMode', 'false');
        }
    });
    
    document.getElementById("refresh-page").addEventListener("click", function(event) {
        location.reload();
    });

    const datePicker = document.getElementById('datePicker');
    const result3 = document.getElementById('result3');
    const result14 = document.getElementById('result14');
    const result30 = document.getElementById('result30');
    const result60 = document.getElementById('result60');
    const result90 = document.getElementById('result90');

    datePicker.addEventListener('change', function() {
        const selectedDate = new Date(datePicker.value);

        const resultDate3 = new Date(selectedDate);
        resultDate3.setDate(resultDate3.getDate() + 3);

        const resultDate14 = new Date(selectedDate);
        resultDate14.setDate(resultDate14.getDate() + 14);

        const resultDate30 = new Date(selectedDate);
        resultDate30.setDate(resultDate30.getDate() + 30);

        const resultDate60 = new Date(selectedDate);
        resultDate60.setDate(resultDate60.getDate() + 60);

        const resultDate90 = new Date(selectedDate);
        resultDate90.setDate(resultDate90.getDate() + 90);

        result3.textContent = `Date after 3 days: ${resultDate3.toDateString()}`;
        result14.textContent = `Date after 14 days: ${resultDate14.toDateString()}`;
        result30.textContent = `Date after 30 days: ${resultDate30.toDateString()}`;
        result60.textContent = `Date after 60 days: ${resultDate60.toDateString()}`;
        result90.textContent = `Date after 90 days: ${resultDate90.toDateString()}`;
    });
});


function getOptions(issue) {
    switch (issue) {
        case "pre-delivery":
            return [
                ["Wait for delivery Attempt", "pre-delivery-EDD Not Passed"],
                ["Wait PDD +14 days", "pre-delivery-EDD-Passed"],
                ["Undeliverable", "pre-delivery-RTO arrive to FC"],
                ["IR Requested", "pre-delivery-RTO (IR Requesting)"],
                ["Invalid IR (Incorrect)", "pre-delivery-Invalid IR (incorrect)"],
                ["Invalid IR (Incomplete)", "pre-delivery-Invalid IR (incomplete)"],
                ["Invalid IR (Missing)", "pre-delivery-Invalid IR (Missing)"],
                ["Invalid IR (Wrong-Format)", "pre-delivery-Invalid IR (Wrong-Format)"],
                ["Deny Concession", "pre-delivery-Deny Concession"]
            ];
        case "dnr":
            return [
                ["Wait FRD", "dnr-FRD Not Passed"],
                ["ARI Submitted", "dnr-ARI Submitted"],
                ["ARI Ongoing", "dnr-ARI Ongoing"], 
                ["Affidavit Requested", "dnr-Affidavit"],
                ["Invalid Affidavit (Incorrect)", "dnr-Invalid Affidavit (incorrect)"],
                ["Invalid Affidavit (Incomplete)", "dnr-Invalid Affidavit (incomplete)"],
                ["Invalid Affidavit (Missing)", "dnr-Invalid Affidavit (Missing)"],
                ["Invalid Affidavit (Wrong-Format)", "dnr-Invalid Affidavit (Wrong-Format)"],
                ["Deny Concession ( OTP )", "dnr-Deny(OTP)"],
                ["Deny Concession ( COD )", "dnr-Deny(COD)"]
            ];
        case "item-missing":
            return [
                ["ARI Submitted", "item-missing-ARI-Submitted"],
                ["ARI Ongoing", "item-missing-ARI Ongoing"],
                ["Affidavit Requested", "item-missing-Affidavit"],
                ["Invalid Affidavit (Incorrect)", "item-missing-Invalid Affidavit (incorrect)"],
                ["Invalid Affidavit (Incomplete)", "item-missing-Invalid Affidavit (incomplete)"],
                ["Invalid Affidavit (Missing)", "item-missing-Invalid Affidavit (Missing)"],
                ["Invalid Affidavit (Wrong-Format)", "item-missing-Invalid Affidavit (Wrong-Format)"],
                ["Deny Concession", "item-missing-Deny Concession"],
                ["Deny concession - tamper proof", "item-missing-concession-tamper proof"]

            ];
        case "empty-box":
            return [
                ["ARI Submitted", "empty-box-ARI Submitted"],
                ["ARI Ongoing", "empty-box-ARI Ongoing"],
                ["Affidavit Requested", "empty-box-Affidavit"],
                ["Invalid Affidavit (Incorrect)", "empty-box-Invalid Affidavit (incorrect)"],
                ["Invalid Affidavit (Incomplete)", "empty-box-Invalid Affidavit (incomplete)"],
                ["Invalid Affidavit (Missing)", "empty-box-Invalid Affidavit (Missing)"],
                ["Invalid Affidavit (Wrong-Format)", "empty-box-Invalid Affidavit (Wrong-Format)"],
                ["Deny Concession", "empty-box-Deny Concession"],
                ["Deny concession - tamper proof", "empty-box-concession-tamper proof"]

            ];
        case "part-missing":
            return [
                ["Returnable Item", "parts-missing-Returnable Item"],
                ["Image requested (Non-retunable)", "parts-missing-Image requested (Non-retunable)"],
                ["Invalid Image (Non-retunable)", "parts-missing-Invalid Image (Non-retunable)"],
                ["Deny concession - 3 times Invalid Image (Non-retunable)", "parts-missing-Denyconcession-3timesInvalidImage(Non-retunable)"]
            ];
        case "wrong-item":
            return [
                ["ARI Submitted", "wrong-item-ARI Submitted"],
                ["ARI Ongoing", "wrong-item-ARI Ongoing"],
                ["Image requested", "wrong-item-Image requested"],
                ["Valid Image (Returnable)", "wrong-item-Valid Image (Returnable)"],
                ["Invalid Image", "wrong-item-Invalid Image"],
                ["Deny concession - 3 times Invalid Image", "wrong-item-Deny-concession-3 times"],
                ["Deny concession - tamper proof", "wrong-item-Deny-concession-tamper proof"]
            ];
        case "return":
            return [
                ["RMA submitted", "Retrun-RMA-submitted"],
                ["Wait SLA of Return", "Retrun-SLA-Not-Passed"],
                ["IR requested", "Retrun-IR-Requsted"],
                ["Invalid IR (Incorrect)", "Retrun-Invalid IR (incorrect)"],
                ["Invalid IR (Incomplete)", "Retrun-Invalid IR (incomplete)"],
                ["Invalid IR (Missing)", "Retrun-Invalid IR (Missing)"],
                ["Invalid IR (Wrong-Format)", "Retrun-Invalid IR (Wrong-Format)"],
                ["Deny concession (RMA Expired)", "Retrun-Deny(RMA Expired)"],
                ["Deny concession (No Scan)", "Retrun-Deny(No Scan)"]
            ];
        case "any-carrier":
            return [
                ["RMA submitted", "any-carrier-RMA-submitted"],
                ["Receipt Requested", "any-carrier-receipt"],
                ["Valid Receipt", "any-carrier-Valid"],
                ["Invalid Receipt", "any-carrier-Invalid"],
                ["Return Not Processed", "any-carrier-Not-Processed"],
                ["Deny Concession (After Deadline)", "any-carrier-Deny"]
            ];x
        case "mdr":
            return [
                ["IR requsted", "mdr-IR-requsted"],
                ["Invalid IR (incomplete)", "mdr-Invalid-(incomplete)"],
                ["Invalid IR (incorrect)", "mdr-Invalid-(incorrect)"],
                ["Invalid IR (Missing)", "mdr-Invalid-(Missing)"]

            ];           
        case "refund":
            return [
                ["Initiated Refund- GC", "Refunds-Initiated-GC"],
                ["Initiated Refund- BA", "Refunds-Initiated-BA"],
                ["Over limit Refund", "Over_limit_Refund"],
                ["Initiated Refund- Tabby", "Refunds-Initiated-Tabby"],
                ["Confirming Refund- Tabby", "Refunds-Confirming-Tabby"],
                ["Confirming Refund", "Refunds-Confirming"]
            ];
        case "ofm":
            return [
                ["Warning", "ofm-Warn"]
            ];
        case "others":
            return [
                ["More Info", "others-more-info"],
                ["Add BA", "others-BA"],    
                ["Authentication Failed", "others-authentication-failed"]
            ];
        case "damaged-defective":
            return [
                ["ARI Submitted", "damaged-defective-ARI Submitted"],
                ["ARI Ongoing", "damaged-defective-ARI Ongoing"],
                ["Create RMA-(Returnable)", "damaged-defective-Returnable"],
                ["Affidavit Requested", "damaged-defective-Affidavit"],
                ["Invalid Affidavit (Incorrect)", "damaged-defective-Invalid Affidavit (incorrect)"],
                ["Invalid Affidavit (Incomplete)", "damaged-defective-Invalid Affidavit (incomplete)"],
                ["Invalid Affidavit (Missing)", "damaged-defective-Invalid Affidavit (Missing)"],
                ["Invalid Affidavit (Wrong-Format)", "damaged-defective-Invalid Affidavit (Wrong-Format)"],
                ["Image requested", "damaged-defective-Image-requested(Non-Returnable)"],
                ["Image requested (Expired-Item)", "damaged-defective-Image-requested(Expired-Item)"],
                ["Invalid Image", "damaged-defective-Invalid-Image(Non-Returnable)(Missing)"]

            ];
        default:
            return options[issue] || [];
    }
}

function updateMoreInfo() {
    const customerIssueSelect = document.getElementById("select-customer-issue");
    const moreInfoSelect = document.getElementById("select-more-info");

    moreInfoSelect.innerHTML = '';

    const fragment = document.createDocumentFragment();
    const options = getOptions(customerIssueSelect.value);

    options.forEach(option => {
        const opt = new Option(option[0], option[1]);
        fragment.appendChild(opt);
    });

    moreInfoSelect.appendChild(fragment);
}

function displayData() {
    const selectedOption = document.getElementById("select-more-info").value;
    const orderID = document.getElementById("order-id").value;
    const amount = document.getElementById("amount").value;
    const additionalDetails = document.getElementById("additional-details").value;
    const lang = document.getElementById("language").value;
    const country = document.getElementById("country").value;
    // const is90DaysChecked = document.getElementById("checkbox-90-days").checked;
    const customerIssueSelect = document.getElementById("select-customer-issue").value;
    const datePickerValue = document.getElementById("datePicker").value;
    // const selectedDate = new Date(datePicker.value); 
    const englishName = document.getElementById('name-english').value;
    const arabicName = document.getElementById('name-arabic').value;

    if (!englishName) {
        alert("Please enter the English name.");
        return;
    }

    if (!arabicName) {
        alert("Please enter the Arabic name.");
        return;
    }
    
    if (datePickerValue === "") {
        alert("SELECT DATE!");  
        return;
    }

    // let data = preloadedData[lang][country][customerIssueSelect][selectedOption];


    const dataPath = preloadedData[lang] && preloadedData[lang][country] && preloadedData[lang][country][customerIssueSelect];
    if (!dataPath) {
        alert("Data not available for the selected language, country, and issue.");
        return;
    }

    let dataObj = dataPath[selectedOption];
    if (!dataObj) {
        alert("Data not available for the selected option.");
        return;
    }

    let data = dataObj.text;
    const emailLink = dataObj.links;
    data = data.replace(/\[Order ID\]/g, orderID);
    data = data.replace(/\[Amount\]/g, amount);
    data = data.replace(/\[Additional_details\]/g, additionalDetails);
    // data = data.replace(/\[Date_of_today\]/g, new Date().toLocaleDateString());
    data = data.replace(/\[Agent_Name\]/g, englishName);
    data = data.replace(/\[اسم_الموظف\]/g, arabicName);

    const currentDate = new Date();
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };


    const futureDate3 = new Date(datePickerValue);
    futureDate3.setDate(futureDate3.getDate() + 3);
    const futureDate14 = new Date(datePickerValue);
    futureDate14.setDate(futureDate14.getDate() + 14);
    const futureDate30 = new Date(datePickerValue);  
    futureDate30.setDate(futureDate30.getDate() + 30);
    const futureDate60 = new Date(datePickerValue);
    futureDate60.setDate(futureDate60.getDate() + 60);
    const futureDate90 = new Date(datePickerValue);
    futureDate90.setDate(futureDate90.getDate() + 90);

    
    data = data.replace(/\[Date_of_today\]/g, currentDate.toLocaleDateString(undefined, options));
    data = data.replace(/\[Date_of_picker\]/g, new Date(datePickerValue).toLocaleDateString(undefined, options));
    data = data.replace(/\[Date_of_today\+3\]/g, futureDate3.toLocaleDateString(undefined, options));
    data = data.replace(/\[Date_of_today\+14\]/g, futureDate14.toLocaleDateString(undefined, options));
    data = data.replace(/\[Date_of_today\+30\]/g, futureDate30.toLocaleDateString(undefined, options));
    data = data.replace(/\[Date_of_today\+60\]/g, futureDate60.toLocaleDateString(undefined, options));
    data = data.replace(/\[Date_of_today\+90\]/g, futureDate90.toLocaleDateString(undefined, options));

    
    const combinedData = `${data}\n\nRelevant Link: ${emailLink}`;

    const relatedDataTextarea = document.getElementById("related-data");
    relatedDataTextarea.value = data;
    
    const linkContainer = document.getElementById("link-container");
    if (emailLink) {
        linkContainer.innerHTML = `
    <p><strong style="color: red;">Reference Link:</strong> <a href="${emailLink}" target="_blank">Click here for details</a></p>
    <p>**Check The Reference To Make Sure Your Blurbs updated*  *</p>`;

    } else {
        linkContainer.innerHTML = "";  
    }

}   

function copyData() {
    const relatedDataTextarea = document.getElementById("related-data");
    relatedDataTextarea.select();
    document.execCommand("copy");
}

function switchLanguage() {
    const lang = document.getElementById("language").value;
}

function switchCountry() {
    const country = document.getElementById("country").value;
    console.log("Selected Country:", country);
}