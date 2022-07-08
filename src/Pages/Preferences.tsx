import { FC, memo, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Themes } from "../Hooks/useTheme";
import ThemeContext from "../Contexts/ThemeContext";
import Page from "../Components/Page/Page";
import Panel from "../Components/Panel/Panel";
import PanelHeader from "../Components/PanelHeader/PanelHeader";
import PanelContent from "../Components/PanelContent/PanelContent";
import {
  PanelSetting,
  PanelSettingInfo,
} from "../Components/PanelSetting/PanelSetting";
import Link from "../Components/Link/Link";
import usedLibraies from "../Data/usedLibraies.json";

const Preferences: FC = (): JSX.Element => {
  const { t } = useTranslation("preferences");

  const { browserTheme, setbrowserTheme } = useContext(ThemeContext);

  return (
    <Page header={t("preferences")}>
      <Panel>
        <PanelHeader header={t("appearance")} icon="&#xE2B1;" />
        <PanelSetting>
          <span>{t("themeSelection")}</span>
        </PanelSetting>
      </Panel>
      <Panel>
        <PanelHeader header={t("language")} icon="&#xF2B7;" />
        <PanelSetting>
          <span>{t("selectLanguage")}</span>
        </PanelSetting>
      </Panel>
      <Panel>
        <PanelHeader header={t("thisPortfolio")} icon="&#xE167;" />
        <PanelContent>
          <Link href="https://github.com/MateuszPerczak/mateuszperczak.github.io">
            {t("viewOnGithub")}
          </Link>
        </PanelContent>
      </Panel>
      <Panel>
        <PanelHeader header={t("usedLibraies")} icon="&#xE943;" />
        <PanelSettingInfo>
          {usedLibraies.map(({ header, href }, index) => {
            return (
              <Link key={index} href={href}>
                {header}
              </Link>
            );
          })}
        </PanelSettingInfo>
      </Panel>
    </Page>
  );
};
export default memo(Preferences);
