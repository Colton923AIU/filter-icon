import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import {
  BaseClientSideWebPart,
  IWebPartPropertiesMetadata,
} from "@microsoft/sp-webpart-base";

import FilterIcon from "./components/FilterIcon";
import { IFilterIconProps } from "./components/IFilterIconProps";
import { DynamicProperty } from "@microsoft/sp-component-base";

export interface IFilterIconWebPartProps {
  icon: string;
  name: string;
  filterState: DynamicProperty<{ [key: string]: boolean }>;
}

export default class FilterIconWebPart extends BaseClientSideWebPart<IFilterIconWebPartProps> {
  // Callback to handle dynamic data updates
  private filterStateCallback = () => {
    this.render();
  };

  protected onInit(): Promise<void> {
    this.properties.filterState.register(this.filterStateCallback);
    const curr = this.properties.filterState.tryGetValue();
    if (curr === undefined) {
      this.properties.filterState.setValue({ [this.properties.name]: false });
    }

    return Promise.resolve();
  }

  public render(): void {
    const toggle = () => {
      const curr = this.properties.filterState.tryGetValue();
      if (curr === undefined) {
        this.properties.filterState.setValue({ [this.properties.name]: false });
        return false;
      } else {
        const newCurr = { ...curr };
        const val = !newCurr[this.properties.name];
        newCurr[this.properties.name] = val;
        this.properties.filterState.setValue(newCurr);
        return val;
      }
    };
    const element: React.ReactElement<IFilterIconProps> = React.createElement(
      FilterIcon,
      {
        icon: this.properties.icon,
        filterName: this.properties.name,
        toggle: toggle,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);

    if (this.properties.filterState.hasDefaultCallback()) {
      this.properties.filterState.removeDefaultCallback();
    }
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected get propertiesMetadata(): IWebPartPropertiesMetadata {
    return {
      filterState: {
        dynamicPropertyType: "object",
      },
    };
  }

  protected get disableReactivePropertyChanges(): boolean {
    return false;
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
                PropertyPaneTextField("icon", {
                  label: "Icon",
                  description: "SVG",
                }),
                PropertyPaneTextField("name", {
                  label: "Filter Name",
                  description:
                    "Example: 'AIUSys', now when you want to use this filter in other webparts, you have to use <AIUSys>{your text} </AIUSys> to wrap your text.",
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
