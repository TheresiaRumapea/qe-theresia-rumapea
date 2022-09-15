package Kuis_Hewan;

public class Hewan {
    public int jumlahKaki;
    private String nama;

    public void makan(String nama){
        System.out.println(nama + " sedang makan.");
    }
    public void caraBerkembangBiak(){
        System.out.println("Hewan Berkembangbiak dengan cara yang berbeda-beda");
    }
    public void bergerak(int jumlahKaki){
        System.out.println("Bergerak dengan " + jumlahKaki + " kaki");
    }

}
