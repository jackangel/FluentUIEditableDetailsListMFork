// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
    Checkbox,
    ChoiceGroup,
    DatePicker,
    divProperties,
    Dropdown,
    IDropdownOption,
    IStackStyles,
    IStackTokens,
    ITag,
    ITextFieldStyles,
    mergeStyleSets,
    PrimaryButton,
    Stack,
    TextField,
} from 'office-ui-fabric-react';
import React, { useEffect, useState } from 'react';
import { IColumnConfig } from '../types/columnconfigtype';
import { EditControlType } from '../types/editcontroltype';
import { DayPickerStrings } from './datepickerconfig';
import {
    controlClass,
    horizontalGapStackTokens,
    stackStyles,
    textFieldStyles,
    verticalGapStackTokens,
} from './editablegridstyles';
import { GetDefault, IsValidDataType, ParseType } from './helper';
import PickerControl from './pickercontrol/picker';
import SearchableDropdown from './searchabledropdown/searchabledropdown';

interface Props {
    onChange: any;
    columnConfigurationData: IColumnConfig[];
}

const EditPanel = (props: Props) => {
    const updateObj: any = {};
    const [columnValuesObj, setColumnValuesObj] = useState<any>(null);

    useEffect(() => {
        let tmpColumnValuesObj: any = {};
        props.columnConfigurationData
            .filter((x) => x.editable == true)
            .forEach((item, index) => {
                tmpColumnValuesObj[item.key] = {
                    value: GetDefault(item.dataType),
                    isChanged: false,
                    error: null,
                };
            });
        setColumnValuesObj(tmpColumnValuesObj);
    }, [props.columnConfigurationData]);

    const SetObjValues = (
        key: string,
        value: any,
        isChanged: boolean = true,
        errorMessage: string | null = null
    ): void => {
        setColumnValuesObj({
            ...columnValuesObj,
            [key]: { value: value, isChanged: isChanged, error: errorMessage },
        });
    };

    const onDropDownChange = (
        event: React.FormEvent<HTMLDivElement>,
        selectedDropdownItem: IDropdownOption | undefined,
        item: any
    ): void => {
        SetObjValues(item.key, selectedDropdownItem?.text);
    };

    const onTextUpdate = (
        ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
        text: string,
        column: IColumnConfig
    ): void => {
        if (!IsValidDataType(column.dataType, text)) {
            SetObjValues(
                (ev.target as Element).id,
                text,
                false,
                `Data should be of type '${column.dataType}'`
            );
            return;
        }

        SetObjValues(
            (ev.target as Element).id,
            ParseType(column.dataType, text)
        );
    };

    const onCheckboxUpdate = (
        ev: React.FormEvent<HTMLElement | HTMLInputElement> | undefined,
        column: IColumnConfig
    ): void => {
        if(ev)
        SetObjValues(
            (ev.target as Element).id,(ev.target as any).checked?1:0);
    };

    const onPanelSubmit = (): void => {
        var objectKeys = Object.keys(columnValuesObj);
        objectKeys.forEach((objKey) => {
            if (columnValuesObj[objKey]['isChanged']) {
                updateObj[objKey] = columnValuesObj[objKey]['value'];
            }
        });

        props.onChange(updateObj);
    };

    const onCellDateChange = (
        date: Date | null | undefined,
        item: any
    ): void => {
        SetObjValues(item.key, date);
    };

    const onCellPickerTagListChanged = (
        cellPickerTagList: ITag[] | undefined,
        item: any
    ): void => {
        if (
            cellPickerTagList &&
            cellPickerTagList[0] &&
            cellPickerTagList[0].name
        )
            SetObjValues(item.key, cellPickerTagList[0].name);
        else SetObjValues(item.key, '');
    };

    const onChoiceGroupChange = (ev:any , option:any) => {
        if(ev)
        SetObjValues(
            (ev.target.parentElement.parentElement.parentElement.parentElement.parentElement as Element).id,option.key);
    }

    const createTextFields = (): any[] => {
        let tmpRenderObj: any[] = [];
        props.columnConfigurationData
            .filter((x) => x.editable == true)
            .forEach((item) => {
                switch (item.inputType) {
                    case EditControlType.Date:
                        tmpRenderObj.push(
                            <DatePicker
                                label={item.text}
                                formatDate={item.dateFormater}
                                strings={DayPickerStrings}
                                placeholder="Select a date..."
                                ariaLabel="Select a date"
                                onSelectDate={(date) =>
                                    onCellDateChange(date, item)
                                }
                                //value={props != null && props.panelValues != null ? new Date(props.panelValues[item.key]) : new Date()}
                                value={new Date()}
                            />
                        );
                        break;
                    case EditControlType.Picker:
                        tmpRenderObj.push(
                            <div>
                                <span className={controlClass.pickerLabel}>
                                    {item.text}
                                </span>
                                <PickerControl
                                    arialabel={item.text}
                                    selectedItemsLimit={1}
                                    pickerTags={
                                        item.pickerOptions?.pickerTags ?? []
                                    }
                                    minCharLimitForSuggestions={2}
                                    onTaglistChanged={(
                                        selectedItem: ITag[] | undefined
                                    ) =>
                                        onCellPickerTagListChanged(
                                            selectedItem,
                                            item
                                        )
                                    }
                                    pickerDescriptionOptions={
                                        item.pickerOptions
                                            ?.pickerDescriptionOptions
                                    }
                                />
                            </div>
                        );
                        break;
                    case EditControlType.DropDown:
                        tmpRenderObj.push(
                            <Dropdown
                                label={item.text}
                                options={item.dropdownValues ?? []}
                                onChange={(ev, selected) =>
                                    onDropDownChange(ev, selected, item)
                                }
                            />
                        );
                        break;
                    case EditControlType.MultilineTextField:
                        tmpRenderObj.push(
                            <TextField
                                errorMessage={columnValuesObj[item.key].error}
                                name={item.text}
                                multiline={true}
                                rows={1}
                                id={item.key}
                                label={item.text}
                                styles={textFieldStyles}
                                onChange={(ev, text) =>
                                    onTextUpdate(ev, text!, item)
                                }
                                value={columnValuesObj[item.key].value || ''}
                            />
                        );
                        break;
                    case EditControlType.Checkbox:
                            tmpRenderObj.push(
                                <Checkbox
                                    name={item.text}
                                    id={item.key}
                                    label={item.text}
                                    styles={textFieldStyles}
                                    checked={columnValuesObj[item.key].value===1}
                                    onChange={(ev) =>
                                        onCheckboxUpdate(ev, item)
                                    }
                                />
                            );
                            break;
                    case EditControlType.ChoiceGroup:
                                tmpRenderObj.push(
                                    <ChoiceGroup defaultSelectedKey={columnValuesObj[item.key].value} 
                                    id={item.key}
                                    options={item.choiceGroupDefinition!==undefined ? JSON.parse(item.choiceGroupDefinition):[{key:'A',text:'Option A'},{key:'B',text:'Option B'}]} 
                                    onChange={(ev,option)=>{onChoiceGroupChange(ev, option)}}
                                    />
                                );
                    break;
                    default:
                        tmpRenderObj.push(
                            <TextField
                                errorMessage={columnValuesObj[item.key].error}
                                name={item.text}
                                id={item.key}
                                label={item.text}
                                styles={textFieldStyles}
                                onChange={(ev, text) =>
                                    onTextUpdate(ev, text!, item)
                                }
                                value={columnValuesObj[item.key].value || ''}
                            />
                        );
                        break;
                }
            });
        return tmpRenderObj;
    };

    return (
        <Stack>
            <Stack tokens={verticalGapStackTokens}>
                {columnValuesObj && createTextFields()}
            </Stack>
            <Stack
                horizontal
                disableShrink
                styles={stackStyles}
                tokens={horizontalGapStackTokens}
            >
                <PrimaryButton
                    text="Save To Grid"
                    className={controlClass.submitStylesEditpanel}
                    onClick={onPanelSubmit}
                    allowDisabledFocus
                    disabled={
                        (columnValuesObj &&
                            Object.keys(columnValuesObj).some(
                                (k) =>
                                    columnValuesObj[k] &&
                                    columnValuesObj[k].error &&
                                    columnValuesObj[k].error.length > 0
                            )) ||
                        false
                    }
                />
            </Stack>
        </Stack>
    );
};

export default EditPanel;
