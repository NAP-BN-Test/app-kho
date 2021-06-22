import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
function AutoComplateSANPHAM(data: any) {
  console.log('data', data.data);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([] as any);
  console.log(items);

  useEffect(() => {
    setItems(data.data);
    // finData('');
  }, [data.data]);

  return (
    <View>
      <DropDownPicker
        // {...props}
        items={items}
        open={open}
        value={value}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        searchable={true}
        schema={{
          label: 'NameVI',
          value: 'ID',
          icon: 'icon',
          parent: 'parent',
          selectable: 'selectable',
          disabled: 'disabled',
        }}
      />
    </View>
  );
}

export default AutoComplateSANPHAM;
