import styled from "styled-components";
import { PriceData } from "./Coin";

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

interface PriceProps {
    tickerData?: PriceData;
}

function Price({ tickerData }: PriceProps) {
    return (
        <>
            <Overview>
                <OverviewItem>
                    <span>Beta Value:</span>
                    <span>{tickerData?.beta_value}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>First Data At:</span>
                    <span>{tickerData?.first_data_at.slice(0, 10)}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>Last Updated:</span>
                    <span>{tickerData?.last_updated.slice(0, 10)}</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <span>Volume 24h:</span>
                    <span>{tickerData?.quotes.USD.volume_24h}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>Volume 24h Change 24h:</span>
                    <span>{tickerData?.quotes.USD.volume_24h_change_24h}</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <span>Market Cap:</span>
                    <span>{tickerData?.quotes.USD.market_cap}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>Market Cap Change 24h:</span>
                    <span>{tickerData?.quotes.USD.market_cap_change_24h}</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <span>Percent Change 15m:</span>
                    <span>{tickerData?.quotes.USD.percent_change_15m.toFixed(3)}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>Percent Change 30m:</span>
                    <span>{tickerData?.quotes.USD.percent_change_30m.toFixed(3)}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>Percent Change 1h:</span>
                    <span>{tickerData?.quotes.USD.percent_change_1h.toFixed(3)}</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <span>Percent Change 6h:</span>
                    <span>{tickerData?.quotes.USD.percent_change_6h.toFixed(3)}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>Percent Change 12h:</span>
                    <span>{tickerData?.quotes.USD.percent_change_12h.toFixed(3)}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>Percent Change 24h:</span>
                    <span>{tickerData?.quotes.USD.percent_change_24h.toFixed(3)}</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <span>Percent Change 7d:</span>
                    <span>{tickerData?.quotes.USD.percent_change_7d.toFixed(3)}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>Percent Change 30d:</span>
                    <span>{tickerData?.quotes.USD.percent_change_30d.toFixed(3)}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>Percent Change 1y:</span>
                    <span>{tickerData?.quotes.USD.percent_change_1y.toFixed(3)}</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <span>Ath Price:</span>
                    <span>{tickerData?.quotes.USD.ath_price}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>Ath Date:</span>
                    <span>{tickerData?.quotes.USD.ath_date.slice(0, 10)}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>Percent From Price Ath:</span>
                    <span>{tickerData?.quotes.USD.percent_from_price_ath}</span>
                </OverviewItem>
            </Overview>
        </>
    );
}

export default Price;
