import { Pressable, PressableProps, Text, View } from "react-native";

import clsx from "clsx";

import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

export type IconNameProps = keyof typeof MaterialIcons.glyphMap;

type DrawerButtonProps = PressableProps & {
  title: string;
  iconName: IconNameProps;
  isDividir?: boolean;
  isFocused?: boolean;
  notifications?: number;
};

export default function DrawerButton({
  title,
  iconName,
  isDividir,
  isFocused,
  notifications,
  ...rest
}: DrawerButtonProps) {
  return (
    <Pressable
      className={clsx("py-2 w-full", {
        "border-b ml-10 border-gray-500": isDividir,
      })}
      {...rest}
    >
      <View
        className={clsx("flex-row items-center gap-4 h-14 px-6 -ml-2 w-full", {
          "-ml-12": isDividir,
          "bg-orange-800 rounded-r-full": isFocused,
        })}
      >
        <MaterialIcons
          name={iconName}
          size={20}
          color={isFocused ? colors.orange[300] : colors.gray[400]}
        />
        <Text
          className={clsx("text-white font-subtitle text-base flex-1", {
            "text-orange-300": isFocused,
          })}
        >
          {title}
        </Text>

        <Text
          className={clsx("text-gray-400 text-sm font-body", {
            "text-orange-300": isFocused,
          })}
        >
          {notifications}
        </Text>
      </View>
    </Pressable>
  );
}
