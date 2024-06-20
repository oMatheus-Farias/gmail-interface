import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type FloatButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
};

export default function FloatButton({ icon, ...rest }: FloatButtonProps) {
  return (
    <TouchableOpacity
      className="px-4 py-3 bg-gray-600 rounded-full absolute bottom-4 right-4 gap-1 flex-row items-center"
      activeOpacity={0.7}
      {...rest}
    >
      {icon && (
        <MaterialIcons name={icon} size={22} color={colors.orange[500]} />
      )}
      <Text className="font-subtitle text-orange-500">Escrever</Text>
    </TouchableOpacity>
  );
}
