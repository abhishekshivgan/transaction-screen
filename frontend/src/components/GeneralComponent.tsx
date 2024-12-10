import { useState } from "react";

export function GeneralComponent() {
    const [formData, setFormData] = useState<FormData>({
      documentDate: "",
      postingDate: "",
      materialSlip: "",
      docHeaderText: "",
      materials: [
        {
          id: 1,
          matShortText: "",
          sLoc: "",
          glAccount: "",
          stockSegment: "",
          batch: "",
          valuationType: "",
          qtyInUnE: ""
        },
      ],
    });
  
    const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleMaterialChange = (id: number, name: string, value: string): void => {
      const updatedMaterials = formData.materials.map((item) =>
        item.id === id ? { ...item, [name]: value } : item
      );
      setFormData({ ...formData, materials: updatedMaterials });
    };
  
    const handleCheckboxChange = (id: number): void => {
      const updatedSelectedIds = new Set(selectedIds);
      if (updatedSelectedIds.has(id)) {
        updatedSelectedIds.delete(id);
      } else {
        updatedSelectedIds.add(id);
      }
      setSelectedIds(updatedSelectedIds);
    };
  
    const deleteSelectedMaterials = (): void => {
      setFormData({
        ...formData,
        materials: formData.materials.filter((item) => !selectedIds.has(item.id)),
      });
      setSelectedIds(new Set());
    };
  
    const deleteAllMaterials = (): void => {
      setFormData({ ...formData, materials: [] });
      setSelectedIds(new Set());
    };
  
    const addMaterialRow = (): void => {
      setFormData({
        ...formData,
        materials: [
          ...formData.materials,
          {
            id: Date.now(),
            matShortText: "",
            sLoc: "",
            glAccount: "",
            stockSegment: "",
            batch: "",
            valuationType: "",
            qtyInUnE: "",
          },
        ],
      });
    };
  
    return (
      <div>
        <div className="text-xs grid grid-cols-2 gap-1  p-1">
          <div className="flex">
            <label className="block font-semibold mb-1 mr-6">Document Date</label>
            <input
              type="date"
              name="documentDate"
              value={formData.documentDate}
              onChange={handleInputChange}
              className="border px-2 py-[0.6rem] w-fit h-[4px]"
            />
          </div>
          <div className="flex">
            <label className="block font-semibold mb-1 mr-9">Material Slip</label>
            <input
              type="text"
              name="materialSlip"
              value={formData.materialSlip}
              onChange={handleInputChange}
              className="border px-2 py-[0.6rem] w-fit h-[4px]"
            />
          </div>
          <div className="flex">
            <label className="block font-semibold mb-1 mr-9">Posting Date</label>
            <input
              type="date"
              name="postingDate"
              value={formData.postingDate}
              onChange={handleInputChange}
              className="border px-2 py-[0.6rem] w-fit h-[4px]"
            />
          </div>
          <div className="flex">
            <label className="block font-semibold mb-1 mr-3">Doc. Header Text</label>
            <input
              type="text"
              name="docHeaderText"
              value={formData.docHeaderText}
              onChange={handleInputChange}
              className="border px-2 py-[0.6rem] w-fit h-[4px]"
            />
          </div>
        </div>
  
  
  
        <table className="border-collapse border border-gray-300 mt-3 w-full text-left text-xs">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-2 py-1">Select</th>
              <th className="border border-gray-300 px-2 py-1">Mat. Short Text</th>
              <th className="border border-gray-300 px-2 py-1">Qty in UnE</th>
              <th className="border border-gray-300 px-2 py-1">sLoc</th>
              <th className="border border-gray-300 px-2 py-1">G/L Account</th>
              <th className="border border-gray-300 px-2 py-1">Stock Segment</th>
              <th className="border border-gray-300 px-2 py-1">Batch</th>
              <th className="border border-gray-300 px-2 py-1">Valuation Type</th>
            </tr>
          </thead>
          <tbody>
            {formData.materials.map((material) => (
              <tr key={material.id}>
                <td className="border border-gray-300 py-[2px] px-2">
                  <input
                    type="checkbox"
                    checked={selectedIds.has(material.id)}
                    onChange={() => handleCheckboxChange(material.id)}
                  />
                </td>
                <td className="border border-gray-300 py-[2px]">
                  <input
                    type="text"
                    value={material.matShortText}
                    onChange={(e) =>
                      handleMaterialChange(material.id, "matShortText", e.target.value)
                    }
                    className="border w-full py-[2px]"
                  />
                </td>
                <td className="border border-gray-300 py-[2px]">
                  <input
                    type="text"
                    value={material.qtyInUnE}
                    onChange={(e) => handleMaterialChange(material.id, "qtyInUnE", e.target.value)}
                    className="border w-full py-[2px]"
                  />
                </td>
                <td className="border border-gray-300 py-[2px]">
                  <input
                    type="text"
                    value={material.sLoc}
                    onChange={(e) => handleMaterialChange(material.id, "sLoc", e.target.value)}
                    className="border w-full py-[2px]"
                  />
                </td>
                <td className="border border-gray-300 py-[2px]">
                  <input
                    type="text"
                    value={material.glAccount}
                    onChange={(e) =>
                      handleMaterialChange(material.id, "glAccount", e.target.value)
                    }
                    className="border w-full py-[2px]"
                  />
                </td>
                <td className="border border-gray-300 py-[2px]">
                  <input
                    type="text"
                    value={material.stockSegment}
                    onChange={(e) =>
                      handleMaterialChange(material.id, "stockSegment", e.target.value)
                    }
                    className="border w-full py-[2px]"
                  />
                </td>
                <td className="border border-gray-300 py-[2px]">
                  <input
                    type="text"
                    value={material.batch}
                    onChange={(e) => handleMaterialChange(material.id, "batch", e.target.value)}
                    className="border w-full py-[2px]"
                  />
                </td>
                <td className="border border-gray-300 py-[2px]">
                  <input
                    type="text"
                    value={material.valuationType}
                    onChange={(e) =>
                      handleMaterialChange(material.id, "valuationType", e.target.value)
                    }
                    className="border w-full py-[2px]"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-start mt-2">
          <button
            onClick={addMaterialRow}
            className="bg-blue-500 text-xs text-white px-[4px] py-[2px] rounded mr-2"
          >
            Add Material
          </button>
          <button
            onClick={deleteSelectedMaterials}
            className="bg-red-500 text-xs text-white px-[4px] py-[2px] rounded mr-2"
          >
            Delete
          </button>
          <button
            onClick={deleteAllMaterials}
            className="bg-red-500 text-xs text-white px-[4px] py-[2px] rounded"
          >
            Delete All
          </button>
        </div>
      </div>
    );
  }
  
  interface Material {
    id: number;
    matShortText: string;
    qtyInUnE: string;
    sLoc: string;
    glAccount: string;
    stockSegment: string;
    batch: string;
    valuationType: string;
  }
  
  interface FormData {
    documentDate: string;
    postingDate: string;
    materialSlip: string;
    docHeaderText: string;
    materials: Material[];
  }