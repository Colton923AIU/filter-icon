import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import FilterIcon from "./components/FilterIcon";
import { IFilterIconProps } from "./components/IFilterIconProps";
import { GlobalStateService } from "./context/GlobalStateService";

export interface IFilterIconWebPartProps {
  tagTitle: string;
  icon: string;
  name: string; // User-defined name for the filter (e.g., "Military")
}

export default class FilterIconWebPart extends BaseClientSideWebPart<IFilterIconWebPartProps> {
  private globalStateService: GlobalStateService;

  protected onInit(): Promise<void> {
    this.globalStateService = this.context.serviceScope.consume(
      GlobalStateService.serviceKey
    );
    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<IFilterIconProps> = React.createElement(
      FilterIcon,
      {
        tagTitle: this.properties.tagTitle,
        icon: this.properties.icon,
        name: this.properties.name, // Pass the unique name for each icon
        globalStateService: this.globalStateService,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Properties",
          },
          groups: [
            {
              groupName: "Filter Icon",
              groupFields: [
                PropertyPaneTextField("tagTitle", {
                  label: "Tag Title",
                }),
                PropertyPaneTextField("icon", {
                  label: "Icon",
                }),
                PropertyPaneTextField("name", {
                  label: "Filter Name (e.g., Military)",
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
