import java.util.ArrayList;
import java.util.List;

public class Soal04_ArrayUnique {
    public static void main(String[] args) {

//        Integer[] ar1 = {1,2,3,4};
//        Integer[] ar2 = {1,3,5,10,16};

        Integer[] ar1 = {3,8};
        Integer[] ar2 = {2,8};

        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < ar1.length; i++) {
            boolean sama = false;
            for (int j = 0; j < ar2.length; j++) {
                if (ar1[i] == ar2[j]) {
                    sama = true;
                    break;
                }
            }

            if (!sama) {
                result.add(ar1[i]);
            }

        }

        System.out.println(result);

    }
}
